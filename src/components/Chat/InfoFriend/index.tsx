import { memo } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { StepMobile } from "../../../constants/StepMobile";
import { useChat } from "../../../contexts/ChatContext";
import * as S from "./styles";

const InfoFriend = () => {
  const { friend, handleToggleStepMobile } = useChat();

  const usersNames = friend?.users?.map((user) => {
    return ' ' + user.name
  });

  return (
    <>
      {friend?.isGroup && (
        <S.InfoFriend image={friend?.image ?? ""}>
          <div
            className="iconBack"
            onClick={() => handleToggleStepMobile(StepMobile.CONTACTS)}
          >
            <IoIosArrowBack size={24} />
          </div>
          <div className="image"></div>
          <div className="nameAndUsers">
            <div className="name">{friend?.name}</div>
            <div className="users">{usersNames?.join(',')}</div>
          </div>
        </S.InfoFriend>
      )}

      {!friend?.isGroup && (
        <S.InfoFriend image={friend?.image ?? ""}>
          <div
            className="iconBack"
            onClick={() => handleToggleStepMobile(StepMobile.CONTACTS)}
          >
            <IoIosArrowBack size={24} />
          </div>
          <div className="image"></div>
          <div className="name">{friend?.name}</div>
        </S.InfoFriend>
      )}
    </>
  );
};

export default memo(InfoFriend);
