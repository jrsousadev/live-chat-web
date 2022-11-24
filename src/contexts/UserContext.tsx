import { createContext, useContext, useState, useEffect } from "react";
import { getUser } from "../services/user-api";
import Router from "next/router";

export type User = {
  id: string;
  name: string;
  image: string;
};

type UserContextData = {
  user: User | null;
};

type UserProviderProps = {
  children: React.ReactNode;
};

const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const queryUser = window.location.pathname.split("/")[1]

      if (queryUser && queryUser !== "") {
        try {
          const result = await getUser(queryUser);
          setUser(result);
        } catch (err) {
          Router.push("/637d9d6fcaeea7b8cd7d7fed")
        }
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
