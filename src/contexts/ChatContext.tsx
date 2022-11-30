import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Message, MessagesByChat } from "../domain/Message";
import { User, useUser } from "./UserContext";
import { ContactFormated, IContact } from "../domain/Contact";
import { getAllChatsByUser } from "../services/chat-api";
import { checkForDuplicateChats } from "../utils/CheckForDuplicateChats";
import { BASE_SOCKET_BACKEND } from "../environments/values";
import { getChatAndUpdateMessages } from "../utils/GetChatAndUpdateMessages";
import { StepMobile } from "../constants/StepMobile";

import Contact from "../domain/Contact";
import io from "socket.io-client";

export type Friend = {
  chatId: string;
  id: string;
  name: string;
  image: string;
  users?: User[];
  isGroup: boolean;
};

type ChatContextData = {
  friend: Friend | null;
  stepMobile: number | null;
  contacts: ContactFormated[];
  allMessages: MessagesByChat[];

  handleSelectFriendOrGroup: (selectFriendOrGroup: Friend) => void;
  handleSetNewMessage: (newMessage: AddNewMessage) => void;
  handleFilterContacts: (value: string) => void;
  handleToggleStepMobile: (step: number) => void;
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

  const [contactsMemory, setContactsMemory] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);

  const [stepMobile, setStepMobile] = useState<number | null>(null);

  const handleSelectFriendOrGroup = (data: Friend) => {
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

  const handleToggleStepMobile = (step: number) => {
    setStepMobile(step);
  };

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setStepMobile(StepMobile.CONTACTS);
    }
  }, []);

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
        const resultFormated = Contact.mapFormatContactArray(result);

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
        stepMobile,
        contacts,
        friend,
        allMessages,
        handleSelectFriendOrGroup,
        handleSetNewMessage,
        handleFilterContacts,
        handleToggleStepMobile,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
