import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { memo } from "react";

import Chat from "../components/Chat";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Home = () => {
  return (
    <Container>
      <Chat />
    </Container>
  );
};

export default memo(Home);

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  return {
    props: {},
  };
};
