import { memo } from "react";
import { useChat } from "../../../contexts/ChatContext";
import * as S from "./styles";

const InfoFriend = () => {
  const { friend } = useChat();

  return (
    <S.InfoFriend imageUser={friend?.image ?? ""}>
      <div className="image"></div>
      <div className="name">{friend?.name}</div>
    </S.InfoFriend>
  );
};

export default memo(InfoFriend)