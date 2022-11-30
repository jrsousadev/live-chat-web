import { memo } from "react";
import { useChat } from "../../../contexts/ChatContext";
import { useUser } from "../../../contexts/UserContext";
import { MessagesByChat } from "../../../domain/Message";

import MessageBody from "../MessageBody";
import * as S from "./styles";

const Messages = () => {
  const { user } = useUser();
  const { allMessages, friend } = useChat();

  return (
    <S.Wallpaper>
      <S.Messages>
        {allMessages.map((chat: MessagesByChat) => {
          if (
            typeof friend?.chatId !== "undefined" &&
            chat.chatId === friend?.chatId
          ) {
            return (
              <>
                {chat.messages.map((message) => (
                  <MessageBody
                    key={message.id}
                    itIsMe={message.issuer === user?.id}
                    data={message.createdAt}
                    message={message.text}
                    isGroup={friend.isGroup}
                    issuerName={message?.user?.name ?? ""}
                  />
                ))}
              </>
            );
          }
        })}
      </S.Messages>
    </S.Wallpaper>
  );
};

export default memo(Messages);
