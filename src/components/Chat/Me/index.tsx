import { memo } from "react";
import { useChat } from "../../../contexts/ChatContext";
import { useUser } from "../../../contexts/UserContext";
import * as S from "./styles";

const Me = () => {
  const { user } = useUser();
  const { handleFilterContacts } = useChat();

  return (
    <S.MeContainer imageUser={user?.image ?? ""}>
      <div className="image"></div>
      <div className="container-input-search">
        <input
          type="search"
          placeholder="Search contact"
          className="search"
          onChange={(e) => handleFilterContacts(e.target.value)}
        />
      </div>
    </S.MeContainer>
  );
};

export default memo(Me)
