import { api } from "../api";
import { GET_ALL_MESSAGES_BY_CHAT, GET_LAST_MESSAGE_BY_CHAT } from "./message-routes";

export const getAllMessagesByChat = async (chatId: string) => {
  try {
    const response = await api.get(GET_ALL_MESSAGES_BY_CHAT(chatId));
    return response.data;
  } catch (err: any) {
    throw err.response.data
  }
};

export const getLastMessageByChat = async (chatId: string) => {
  try {
    const response = await api.get(GET_LAST_MESSAGE_BY_CHAT(chatId));
    return response.data;
  } catch (err: any) {
    throw err.response.data
  }
}