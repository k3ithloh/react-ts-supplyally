import React from "react";

export type UserContextType = {
  user: { [username : string]: any } | null;
  setUser: React.Dispatch<React.SetStateAction<{ [key: string]: any } | null>>;
};

export const UserContext = React.createContext<UserContextType>({
  user: null,
  setUser: () => {},
});
