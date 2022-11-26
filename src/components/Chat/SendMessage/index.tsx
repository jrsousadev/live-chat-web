import { memo, useState } from "react";
import { useChat } from "../../../contexts/ChatContext";
import { useUser } from "../../../contexts/UserContext";
import * as S from "./styles";

const SendMessage = () => {
  const { user } = useUser();
  const { handleSetNewMessage } = useChat();
  const [newMessage, setNewMessage] = useState("");

  const handleSendNewMessage = () => {
    if (newMessage === "") {
      return;
    }

    if (typeof user?.id !== "undefined") {
      handleSetNewMessage({
        text: newMessage,
        issuer: user.id,
      });
    }

    setNewMessage("");
  };

  return (
    <S.SendMessageContainer>
      <input
        type="text"
        className="input-send"
        value={newMessage}
        onKeyDown={(e) => e.key === 'Enter' && handleSendNewMessage()}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message"
        autoFocus={true}
      />
      <button
        className="button-send"
        onClick={handleSendNewMessage}
      >
        Send
      </button>
    </S.SendMessageContainer>
  );
};

export default memo(SendMessage);
