import { Message, MessagesByChat } from "../domain/Message";

interface IGetChatAndUpdateMessages {
  newMessage: Message;
  allMessages: MessagesByChat[];
  setAllMessages: (messageByChat: any) => void;
}

export const getChatAndUpdateMessages = ({
  allMessages,
  newMessage,
  setAllMessages,
}: IGetChatAndUpdateMessages) => {
  if (allMessages.length >= 1) {
    const isExistChat = allMessages.findIndex(
      (chat) => chat.chatId === newMessage.chatId
    );

    if (isExistChat === -1) {
      return;
    }

    const updateChatInArray = [...allMessages];

    if (
      updateChatInArray[isExistChat].messages.some(
        (message) => message.id === newMessage.id
      )
    ) {
      return;
    }

    updateChatInArray[isExistChat].messages.unshift(newMessage);

    setAllMessages(updateChatInArray);
  }
};
