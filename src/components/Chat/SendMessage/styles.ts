import styled from "styled-components";

export const SendMessageContainer = styled.div`
  background-color: #283046;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 80px;
  grid-gap: 5px;
  padding: 1rem;

  border-bottom-right-radius: 10px;

  border-top: 1px solid #3b4253;

  .input-send,
  .button-send {
    width: 100%;
  }

  .input-send {
    border-radius: 5px;
    border: 1px solid #3b4253;
    color: #ffff;
    outline: none;
    padding-left: 0.5rem;
    background-color: transparent;
    transition: all 0.3s;

    &:focus {
      outline: 1px solid #7367f0;
      padding-left: 0.8rem;
    }

    &::placeholder {
      color: #606677;
    }
  }

  .button-send {
    font-weight: bold;
    background-color: #7367f0;
    border: 1px solid #7367f0;
    border-radius: 5px;
    color: #ffffff;
    transition: all 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
