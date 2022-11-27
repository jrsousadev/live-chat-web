import styled from "styled-components";

export const ChatContainer = styled.div`
  max-width: 1300px;

  width: 100%;
  height: 100%;

  border: 1px solid #3b4253;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 350px 1fr;

  color: #ffffff;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

type LeftContainerProps = {
  stepMobile: number | null;
}

export const LeftContainer = styled.div<LeftContainerProps>`
  border-right: 1px solid #3B4253;
  display: grid;
  grid-template-rows: 70px 1fr;
  color: #ffffff;

  @media (max-width: 1000px) {
    display: ${({stepMobile}) => {
      if (stepMobile === 1 && typeof stepMobile === "number") {
        return "grid"
      }

      if (stepMobile === 2 && typeof stepMobile === "number") {
        return "none"
      }

      if (!stepMobile) {
        return "grid"
      }
    }};
  }
`;

type RightContainerProps = {
  stepMobile: number | null;
}

export const RightContainer = styled.div<RightContainerProps>`
  display: grid;
  grid-template-rows: 70px 1fr 70px;
  color: #ffffff;

  @media (max-width: 1000px) {
    display: ${({stepMobile}) => {
      if (stepMobile === 2 && typeof stepMobile === "number") {
        return "grid"
      }

      if (stepMobile === 1 && typeof stepMobile === "number") {
        return "none"
      }

      if (!stepMobile) {
        return "grid"
      }
    }};
  }
`;