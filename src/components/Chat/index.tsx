import { memo } from "react";

import Contacts from "./Contacts";
import InfoFriend from "./InfoFriend";
import Me from "./Me";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import * as S from "./styles";

const Chat = () => {
  return (
    <S.ChatContainer>
      <S.LeftContainer>
        <Me />
        <Contacts />
      </S.LeftContainer>

      <S.RightContainer>
        <InfoFriend />
        <Messages />
        <SendMessage />
      </S.RightContainer>
    </S.ChatContainer>
  );
};

export default memo(Chat);
