import { api } from "../api";
import { GET_USER } from "./user-routes";

export const getUser = async (id: string) => {
  try {
    const response = await api.get(GET_USER(id));
    return response.data;
  } catch (err: any) {
    throw err.response.data
  }
};
