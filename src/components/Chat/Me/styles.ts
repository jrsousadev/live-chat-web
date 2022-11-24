import styled from "styled-components";

type MeProps = {
  imageUser: string;
};

export const MeContainer = styled.div<MeProps>`
  padding: 0.5rem;
  border-bottom: 1px solid #3b4253;
  border-top-left-radius: 10px;
  background-color: #283046;

  display: flex;
  align-items: center;
  grid-gap: 10px;

  .image {
    clip-path: circle();
    width: 50px;
    height: 50px;
    background-image: ${(props) => `url(${props.imageUser})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .search {
    width: 270px;
    padding: 0.5rem;
    border-radius: 50px;
    border: 1px solid #3b4253;
    background-color: transparent;
    color: #ffff;
    transition: all 0.3s;

    &:focus {
      outline: 1px solid #7367f0;
      padding-left: 0.8rem;
    }

    &::placeholder {
      color: #606677;
    }
  }
`;
