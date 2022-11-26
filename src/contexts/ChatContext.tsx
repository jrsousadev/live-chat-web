import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Message, MessagesByChat } from "../domain/Message";
import { useUser } from "./UserContext";
import { ContactFormated, mapFormatContactArray } from "../domain/Contact";
import { getAllChatsByUser } from "../services/chat-api";
import { checkForDuplicateChats } from "../utils/CheckForDuplicateChats";
import { BASE_SOCKET_BACKEND } from "../environments/values";

import io from "socket.io-client";
import { getChatAndUpdateMessages } from "../utils/GetChatAndUpdateMessages";

export type Friend = {
  chatId: string;
  id: string;
  name: string;
  image: string;
};

type ChatContextData = {
  friend: Friend | null;
  contacts: ContactFormated[];
  allMessages: MessagesByChat[];

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
  const [allMessages, setAllMessages] = useState<MessagesByChat[]>([]);

  const [contactsMemory, setContactsMemory] = useState<ContactFormated[]>([]);
  const [contacts, setContacts] = useState<ContactFormated[]>([]);

  const handleSelectFriend = (data: Friend) => {
    setFriend(data);
  };

  const handleSetNewMessage = ({ issuer, text }: AddNewMessage) => {
    const newMessage = {
      issuer,
      text,
      chatId: friend?.chatId,
    };

    socket.emit("message", {
      message: newMessage,
    });
  };

  useEffect(() => {
    if (typeof friend?.chatId !== "undefined") {
      socket.emit(
        "select_chat",
        {
          chatId: friend?.chatId,
        },
        (messages: Message[]) => {
          checkForDuplicateChats({
            messages,
            allMessages,
            chatId: friend?.chatId,
            setAllMessages,
          });
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [friend]);

  socket.on("message", (newMessage: Message) => {
    if (
      typeof friend?.chatId !== "undefined" &&
      friend.chatId === newMessage.chatId
    ) {
      getChatAndUpdateMessages({ allMessages, newMessage, setAllMessages });
    }
  });

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

  useEffect(() => {
    console.log("allMessages: ", allMessages);
  }, [allMessages]);

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
