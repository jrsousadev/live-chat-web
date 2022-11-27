import { memo } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { StepMobile } from "../../../constants/StepMobile";
import { useChat } from "../../../contexts/ChatContext";
import * as S from "./styles";

const InfoFriend = () => {
  const { friend, handleToggleStepMobile } = useChat();

  return (
    <S.InfoFriend imageUser={friend?.image ?? ""}>
      <div
        className="iconBack"
        onClick={() => handleToggleStepMobile(StepMobile.CONTACTS)}
      >
        <IoIosArrowBack size={24} />
      </div>
      <div className="image"></div>
      <div className="name">{friend?.name}</div>
    </S.InfoFriend>
  );
};

export default memo(InfoFriend);
