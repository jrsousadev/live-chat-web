export const GET_ALL_MESSAGES_BY_CHAT = (chatId: string) => `/message/chat/${chatId}`
export const GET_LAST_MESSAGE_BY_CHAT = (chatId: string) => `/message/lastMessage/${chatId}`
export const ADD_MESSAGE = '/message'