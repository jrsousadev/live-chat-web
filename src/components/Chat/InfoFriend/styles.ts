import styled from "styled-components";

type InfoFriendProps = {
    image: string;
}

export const InfoFriend = styled.div<InfoFriendProps>`
  border-bottom: 1px solid #3b4253;
  background-color: #283046;
  border-top-right-radius: 10px;

  padding-left: 1rem;

  display: flex;
  align-items: center;
  grid-gap: 10px;

  .nameAndUsers {
    display: flex;
    flex-direction: column;

    .users{
      padding-top: 0.5rem;
      font-size: 0.7rem;
      opacity: 0.7;
    }
  }

  .iconBack {
    display: none;
    align-items: center;
    cursor: pointer;

    @media (max-width: 1000px) {
      display: flex;
    }
  }

  .image {
    clip-path: circle();
    width: 50px;
    height: 50px;
    background-image: ${(props) => `url(${props.image})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
