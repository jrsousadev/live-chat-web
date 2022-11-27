import styled from "styled-components";

export const Contacts = styled.div`
  padding-top: 2rem;
  background-color: #283046;

  border-bottom-left-radius: 10px;

  h3 {
    padding-left: 1rem;
    color: #5c56bc;
    font-weight: 400;
    padding-bottom: 1rem;
  }

  .containerContacts {
    height: 100%;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: transparent; 
    }

    &::-webkit-scrollbar-thumb {
      background-color: #a5a8af; 
      border-radius: 20px; 
      border: 1px solid transparent; 
    }
  }
`;
