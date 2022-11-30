import * as S from "./styles";
import moment from "moment";
import { memo } from "react";
interface IMessageBody {
  itIsMe: boolean;
  message: string;
  data: Date;
  isGroup?: boolean;
  issuerName?: string;
}

export const MessageBody = ({
  itIsMe,
  message,
  data,
  isGroup,
  issuerName,
}: IMessageBody) => {
  return (
    <>
      {!isGroup && (
        <S.MessageUser itIsMe={itIsMe}>
          <div>
            <p className="message">{message}</p>
            <p className="data">{moment(data).format("MMM DD | HH:mm")}</p>
          </div>
        </S.MessageUser>
      )}
      {isGroup && (
        <S.MessageGroup itIsMe={itIsMe}>
          <div>
            {!itIsMe && <p className="nameUser">{issuerName ?? ""}</p>}
            <p className="message">{message}</p>
            <p className="data">{moment(data).format("MMM DD | HH:mm")}</p>
          </div>
        </S.MessageGroup>
      )}
    </>
  );
};

export default memo(MessageBody);
