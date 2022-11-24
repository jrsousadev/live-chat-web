import styled from "styled-components";

export const Wallpaper = styled.div`
  background-image: url("https://i.pinimg.com/originals/9f/db/2a/9fdb2ad6141048a551e8f4af2b484a25.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Messages = styled.div`
  overflow-y: scroll;

  height: 740px;

  display: flex;
  flex-direction: column-reverse;
  grid-gap: 10px;

  padding-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;

  &::-webkit-scrollbar {
    width: 5px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #A5A8AF; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 1px solid transparent; /* creates padding around scroll thumb */
  }
`;
