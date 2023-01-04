import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, SetIsLoggendIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        SetIsLoggendIn(true);
      } else {
        SetIsLoggendIn(false);
      }
      setInit(true)
    });
  }, [])
  setInterval(() => {
    console.log(authService.currentUser);
  }, 2000)
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initial.."}
    </>
  
  );
}

export default App;
