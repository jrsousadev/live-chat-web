import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { memo, useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";

import Chat from "../components/Chat";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
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
`;

interface IUsersMemory {
  name: string;
  id: string;
}

const usersMemory = [
  { name: "Junior Sousa", id: "637d9d6fcaeea7b8cd7d7fed" },
  { name: "Amelia Mary", id: "637d9f168592ea71390b10b6" },
  { name: "Oliver James", id: "637e814a51f3338344cf26ea" },
  { name: "Emily Jennifer", id: "637e814e51f3338344cf26eb" },
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
    <Container>
      <div
        style={{
          display: "grid",
          marginRight: "5px",
          color: "#ffffff",
        }}
      >
        <p style={{ marginBottom: "10px" }}>Select another user</p>
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
      </div>

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
