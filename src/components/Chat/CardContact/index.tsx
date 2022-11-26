import { AnchorHTMLAttributes, memo, useEffect, useState } from "react";
import { ContactFormated } from "../../../domain/Contact";
import { Message } from "../../../domain/Message";
import { getLastMessageByChat } from "../../../services/message-api";
import { socket } from "../../../contexts/ChatContext";

import moment from "moment";
import * as S from "./styles";

type ICardContactProps = AnchorHTMLAttributes<HTMLDivElement> & {
  selected: boolean;
  contact: ContactFormated;
};

interface userContact {
  name: string;
  image: string;
}

const CardContact = ({ selected, contact, ...rest }: ICardContactProps) => {
  useEffect(() => {
    socket.emit("select_chat", {
      chatId: contact.id,
    })
  }, [])

  socket.on("message", (response) => {
    if (response.chatId === contact.id) {
      setLastMessage(response);
    }
  });

  const [userContact, setUserContact] = useState<userContact>();
  const [lastMessage, setLastMessage] = useState<Message>();

  useEffect(() => {
    setUserContact(contact.userContact);
  }, [contact]);

  useEffect(() => {
    (async () => {
      const result = await getLastMessageByChat(contact.id);
      setLastMessage(result[0]);
    })();
  }, [contact]);

  return (
    <>
      <S.Card
        imageUser={userContact?.image ?? ""}
        selected={selected}
        {...rest}
      >
        <div className="image"></div>
        <div className="nameAndMessage">
          <p className="name">{userContact?.name}</p>
          <p className="lastMessage">{lastMessage?.text}</p>
        </div>
        <div className="lastDateMessage">
          {moment(lastMessage?.createdAt).format("MMM DD")}
        </div>
      </S.Card>
    </>
  );
};

export default memo(CardContact);
