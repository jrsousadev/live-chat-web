import * as S from "./styles";
import moment from "moment";
import { memo } from "react";
interface IMessageBody {
  itIsMe: boolean;
  message: string;
  data: Date;
}

export const MessageBody = ({ itIsMe, message, data }: IMessageBody) => {
  return (
    <S.Message itIsMe={itIsMe}>
      <div>
        <p className="message">{message}</p>
        <p className="data">{moment(data).format("MMM DD | HH:mm")}</p>
      </div>
    </S.Message>
  );
};

export default memo(MessageBody);
