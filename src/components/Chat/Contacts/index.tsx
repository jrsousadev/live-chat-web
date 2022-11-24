import { memo, useState } from "react";
import { useChat } from "../../../contexts/ChatContext";
import { ContactFormated } from "../../../domain/Contact";

import CardContact from "../CardContact";

import * as S from "./styles";

const Contacts = () => {
  const { contacts } = useChat();

  const [selected, setSelected] = useState<string>("");

  const { handleSelectFriend } = useChat();

  const handleGetFriendId = ({ id, userContact }: ContactFormated) => {
    setSelected(id);
    handleSelectFriend({
      image: userContact?.image ?? "",
      name: userContact?.name ?? "",
      chatId: id,
    });
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