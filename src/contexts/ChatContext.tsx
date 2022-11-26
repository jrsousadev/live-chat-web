import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Message } from "../domain/Message";
import { useUser } from "./UserContext";
import { ContactFormated, mapFormatContactArray } from "../domain/Contact";
import { getAllChatsByUser } from "../services/chat-api";
import { BASE_SOCKET_BACKEND } from "../environments/values";

import io from "socket.io-client";

export type Friend = {
  chatId: string;
  id: string;
  name: string;
  image: string;
};

type ChatContextData = {
  friend: Friend | null;
  contacts: ContactFormated[];
  allMessages: Message[];

  handleSelectFriend: (selectFriend: Friend) => void;
  handleSetNewMessage: (newMessage: AddNewMessage) => void;
  handleFilterContacts: (value: string) => void;
};

type ChatProviderProps = {
  children: React.ReactNode;
};
interface AddNewMessage {
  issuer: string;
  text: string;
}

const ChatContext = createContext({} as ChatContextData);
export const socket = io(String(BASE_SOCKET_BACKEND));

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const { user } = useUser();

  const [friend, setFriend] = useState<Friend | null>(null);
  const [allMessages, setAllMessages] = useState<Message[]>([]);

  const [contactsMemory, setContactsMemory] = useState<ContactFormated[]>([]);
  const [contacts, setContacts] = useState<ContactFormated[]>([]);

  const handleSelectFriend = useCallback((data: Friend) => {
    setFriend(data);
  }, []);

  const handleSetNewMessage = useCallback(
    ({ issuer, text }: AddNewMessage) => {
      if (typeof friend?.chatId !== "undefined") {
        const newMessage = {
          issuer,
          text,
          chatId: friend?.chatId,
        };

        socket.emit("message", {
          message: newMessage,
        });
      }
    },
    [friend?.chatId, friend?.id]
  );

  socket.on("message", (newMessage: Message) => {
    if (
      typeof friend?.chatId !== "undefined" &&
      friend.chatId === newMessage.chatId
    ) {
      console.log('entrou')
      const newArray = [...allMessages];
      newArray.unshift(newMessage);
      setAllMessages(newArray);
    }
  });

  useEffect(() => {
    if (typeof friend?.chatId !== "undefined") {
      socket.emit(
        "select_chat",
        {
          chatId: friend?.chatId,
        },
        (response: Message[]) => setAllMessages(response)
      );
    }
  }, [friend, handleSelectFriend]);

  useEffect(() => {
    (async () => {
      if (user?.id) {
        const result = await getAllChatsByUser(user.id);
        const resultFormated = mapFormatContactArray(result);

        setContacts(resultFormated);
        setContactsMemory(resultFormated);
      }
    })();
  }, [user]);

  const handleFilterContacts = useCallback(
    (value: string) => {
      if (value.length <= 0) return setContacts(contactsMemory);

      const filteredContacts = contacts.filter(({ userContact }) => {
        const startsWith = userContact?.name
          .toLowerCase()
          .startsWith(value.toLowerCase());
        const includes = userContact?.name
          .toLowerCase()
          .includes(value.toLowerCase());

        if (startsWith) return userContact;
        if (includes) return userContact;
      });

      setContacts(filteredContacts);
    },
    [contacts, contactsMemory]
  );

  return (
    <ChatContext.Provider
      value={{
        contacts,
        friend,
        allMessages,
        handleSelectFriend,
        handleSetNewMessage,
        handleFilterContacts,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
