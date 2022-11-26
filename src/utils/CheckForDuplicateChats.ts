import { Message, MessagesByChat } from "../domain/Message";

interface ICheckForDuplicateChats {
  messages: Message[];
  chatId: string;
  allMessages: MessagesByChat[];
  setAllMessages: (messageByChat: any) => void;
}

export const checkForDuplicateChats = ({
  allMessages,
  setAllMessages,
  messages,
  chatId,
}: ICheckForDuplicateChats) => {
  if (allMessages.length <= 0) {
    return setAllMessages((old: MessagesByChat[]) => [
      ...old,
      { chatId, messages: messages },
    ]);
  }

  const isExistChat = allMessages.some(
    (chat) => chat.chatId === chatId
  );

  if (!isExistChat) {
    return setAllMessages((old: MessagesByChat[]) => [
      ...old,
      { chatId: chatId, messages: messages },
    ]);
  }

  const getChatIndex = allMessages.findIndex(
    (chat) => chat.chatId === chatId
  );

  const updateChatMessageInArray = [...allMessages];
  updateChatMessageInArray[getChatIndex].messages = messages
  return setAllMessages(updateChatMessageInArray);
};
