import styled from "styled-components";

export const Wallpaper = styled.div`
  background-image: url("https://i.pinimg.com/originals/9f/db/2a/9fdb2ad6141048a551e8f4af2b484a25.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 75vh;
`;

export const Messages = styled.div`
  overflow-y: scroll;

  height: 100%;

  display: flex;
  flex-direction: column-reverse;
  grid-gap: 10px;

  padding-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #A5A8AF; 
    border-radius: 20px;
    border: 1px solid transparent;
  }
`;
