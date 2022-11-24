import { api } from "../api";
import { GET_ALL_CHATS_BY_USER } from "./chat-routes";

export const getAllChatsByUser = async (userId: string) => {
  try {
    const response = await api.get(GET_ALL_CHATS_BY_USER(userId));
    return response.data;
  } catch (err: any) {
    throw err.response.data
  }
};