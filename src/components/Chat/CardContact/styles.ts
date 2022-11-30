import styled from "styled-components";

type CardProps = {
  image: string;
  selected: boolean;
};

export const Card = styled.div<CardProps>`
  cursor: pointer;

  position: relative;
  background-color: ${({selected}) => selected ? '#9086f3' : 'transparent'};

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  padding-left: 1rem;

  display: flex;
  align-items: center;
  grid-gap: 10px;

  .image {
    clip-path: circle();
    width: 45px;
    height: 45px;
    background-image: ${(props) => `url(${props.image})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .lastMessage {
    font-size: 0.7rem;
    max-width: 30ch;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-top: 0.2rem;
    color: ${({selected}) => !selected && '#5A6071'}
  }

  .lastDateMessage {
    font-size: 0.8rem;
    position: absolute;
    right: 10px;
    top: 10px;
    color: ${({selected}) => !selected && '#5A6071'}
  }

  &:hover {
    background-color: ${({selected}) => !selected && '#0B1436'};
  }
`;
