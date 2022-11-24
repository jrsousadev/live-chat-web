import { memo } from "react";
import { useChat } from "../../../contexts/ChatContext";
import { useUser } from "../../../contexts/UserContext";
import { Message } from "../../../domain/Message";

import MessageBody from "../MessageBody";
import * as S from "./styles";

const Messages = () => {
  const { user } = useUser();
  const { allMessages } = useChat();

  return (
    <S.Wallpaper>
      <S.Messages>
        {allMessages?.map((message: Message) => (
          <MessageBody
            key={message.id}
            itIsMe={message.issuer === user?.id}
            data={message.createdAt}
            message={message.text}
          />
        ))}
      </S.Messages>
    </S.Wallpaper>
  );
};

export default memo(Messages);
