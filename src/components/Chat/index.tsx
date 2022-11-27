import { memo } from "react";
import { useChat } from "../../contexts/ChatContext";

import Contacts from "./Contacts";
import InfoFriend from "./InfoFriend";
import Me from "./Me";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import * as S from "./styles";

const Chat = () => {
  const { friend, stepMobile } = useChat();

  return (
    <S.ChatContainer>
      <S.LeftContainer stepMobile={stepMobile}>
        <Me />
        <Contacts />
      </S.LeftContainer>

      <S.RightContainer stepMobile={stepMobile}>
        {friend && (
          <>
            <InfoFriend />
            <Messages />
            <SendMessage />
          </>
        )}
        {!friend && !stepMobile && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
              fontSize: "1.3rem",
            }}
          >
            Select a chat
          </div>
        )}
      </S.RightContainer>
    </S.ChatContainer>
  );
};

export default memo(Chat);
