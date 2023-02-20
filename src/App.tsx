import React, { useState, useEffect } from "react";
import { Router } from "./routes";
import "@fontsource/ibm-plex-sans";
import { UserContext } from "./userContext";

const App = () => {
  // Provides the other Routes the user state
  // const [user, setUser] = useState<null>(null);
  const [user, setUser] = useState<{ [key: string]: any } | null>(null);
  console.log(user);
  // const providerValue = useMemo(()=> ({user, setUser}), [user, setUser]);

  //Anytime the page is refreshed, adds the user state back into the Context
  useEffect(() => {
    let fetchedUser = localStorage.getItem("user");
    if (fetchedUser != null) {
      const parsedUser = JSON.parse(fetchedUser);
      setUser(parsedUser);
    } else {
      setUser(null);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <Router />
    </UserContext.Provider>
  );
};

export default App;
