import styled from "styled-components";

type InfoFriendProps = {
    imageUser: string;
}

export const InfoFriend = styled.div<InfoFriendProps>`
  border-bottom: 1px solid #3b4253;
  background-color: #283046;
  border-top-right-radius: 10px;

  padding-left: 1rem;

  display: flex;
  align-items: center;
  grid-gap: 10px;

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
    background-image: ${(props) => `url(${props.imageUser})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
