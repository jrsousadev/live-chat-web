import { User } from "../contexts/UserContext";

export type Message = {
  id: string;
  issuer: string;
  chatId: string;
  text: string;
  createdAt: Date;
  user?: User;
};

export type MessagesByChat = {
  chatId: string;
  messages: Message[];
};
