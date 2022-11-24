import styled from "styled-components";

type MessageProps = {
  itIsMe: boolean;
};

export const Message = styled.div<MessageProps>`
  display: flex;
  justify-content: ${({ itIsMe }) => (itIsMe ? "end" : "start")};

  div {
    position: relative;

    background-color: ${({ itIsMe }) => (itIsMe ? "#7C70F1" : "#283046")};
    padding: 0.8rem;

    border-radius: 5px;
    border: 1px solid #2f3957;

    display: flex;
    align-items: center;

    max-width: 600px;

    .data {
      display: grid;
      place-items: end;

      white-space: nowrap;
      text-align: right;
      font-size: 0.7rem;

      padding-left: 0.5rem;
      height: 100%;

      margin-bottom: -13px;
    }
  }
`;
