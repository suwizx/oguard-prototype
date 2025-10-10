"use client";

interface User {
  name: string;
  username: string;
  avater: string;
  password: string;
}

interface UserContext {
  isPending: boolean;
  user: User | null;
  signIn: () => void;
}

import { createContext, ReactNode, useState } from "react";

export const UserContext = createContext<UserContext>({
  isPending: false,
  user: null,
  signIn: () => {},
});

export default function UserProvider({ children }: { children: ReactNode }) {
  const [isPending, setPending] = useState(false);

  const [user, setUser] = useState<null | User>(null);

  function signIn() {
    setPending(true);
    setTimeout(() => {
      setPending(false);
    }, 1000);
    setUser({
      name: "Thunder Permanent",
      avater: "https://cdn.discordapp.com/embed/avatars/3.png",
      password: "1234567",
      username: "thunder",
    });
  }

  return (
    <UserContext.Provider value={{ isPending, signIn, user }}>
      {children}
    </UserContext.Provider>
  );
}

// UserContext is exported above
