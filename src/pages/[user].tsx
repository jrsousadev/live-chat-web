import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { memo, useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";
import { Button, Container, ContainerAnotherUser } from "../styles/pages/user";

import Chat from "../components/Chat";
import Head from "next/head";

interface IUsersMemory {
  name: string;
  id: string;
}

const usersMemory = [
  { name: "Junior", id: "637d9d6fcaeea7b8cd7d7fed" },
  { name: "Homer", id: "637d9f168592ea71390b10b6" },
  { name: "Bart", id: "637e814a51f3338344cf26ea" },
  { name: "Lisa", id: "637e814e51f3338344cf26eb" },
];

const Home = () => {
  const [users, setUsers] = useState<IUsersMemory[]>([]);

  const { user } = useUser();

  useEffect(() => {
    if (typeof user?.id !== "undefined") {
      setUsers(usersMemory.filter((userData) => userData.id !== user.id));
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Chat - {`${user?.name ?? ""}`}</title>
      </Head>
    
      <Container>
        <ContainerAnotherUser>
          <p className="titleSelectAnotherUser">Select another user</p>
          {users.map(
            (userData, index) =>
              userData.id !== user?.id && (
                <Button
                  key={index}
                  onClick={() => window.open(`/${userData.id}`, "_blank")}
                >
                  {userData.name}
                </Button>
              )
          )}
        </ContainerAnotherUser>
        <Chat />
      </Container>
    </>
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
