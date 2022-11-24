import styled from "styled-components";

export const ChatContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;

  border: 1px solid #3B4253;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 350px 1fr;
  color: #ffffff;
`;

export const LeftContainer = styled.div`
  border-right: 1px solid #3B4253;
  display: grid;
  grid-template-rows: 70px 1fr;
  color: #ffffff;
`;

export const RightContainer = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr 70px;
  color: #ffffff;
`;