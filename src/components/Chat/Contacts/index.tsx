import { memo, useState } from "react";
import { StepMobile } from "../../../constants/StepMobile";
import { useChat } from "../../../contexts/ChatContext";
import { ContactFormated } from "../../../domain/Contact";
import CardContact from "../CardContact";

import * as S from "./styles";

const Contacts = () => {
  const { contacts, stepMobile, handleToggleStepMobile } = useChat();

  const [selected, setSelected] = useState<string>("");

  const { handleSelectFriendOrGroup } = useChat();

  const handleGetFriendId = (data: ContactFormated) => {
    setSelected(data.id);

    if (data.isGroup) {
      handleSelectFriendOrGroup({
        image: data?.groupImage ?? "",
        name: data?.groupName ?? "",
        chatId: data.id,
        id: "",
        users: data.users,
        isGroup: true,
      });
    }

    if (!data.isGroup) {
      handleSelectFriendOrGroup({
        image: data?.userContact?.image ?? "",
        name: data?.userContact?.name ?? "",
        chatId: data.id,
        id: data?.userContact?.id ?? "",
        isGroup: false
      });
    }

    if (stepMobile) {
      handleToggleStepMobile(StepMobile.CHAT);
    }
  };

  return (
    <S.Contacts>
      <h3>Chats</h3>

      <div className="containerContacts">
        {contacts.map((contact: ContactFormated, index) => {
          return (
            <CardContact
              key={index}
              contact={contact}
              selected={selected === contact.id}
              onClick={() => handleGetFriendId(contact)}
            />
          );
        })}
      </div>
    </S.Contacts>
  );
};

export default memo(Contacts);
