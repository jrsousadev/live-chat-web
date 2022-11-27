import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: auto;

  height: 100vh;
  width: 100vw;

  padding: 0 10px;
  padding-bottom: 4rem;

  @media (max-width: 1000px) {
    max-width: 768px;
    width: 100%;
  }
`;

export const Button = styled.button`
  background-color: #c23660;
  border-radius: 5px;
  padding: 0.3rem;
  color: #ffffff;

  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

export const ContainerAnotherUser = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 10px;
  align-items: center;
  width: 100%;

  color: #ffffff;

  margin-top: 1rem;
  margin-bottom: 1rem;

  .titleSelectAnotherUser {
  }

  @media (max-width: 450px) {
    text-align: center;
  }
`;
