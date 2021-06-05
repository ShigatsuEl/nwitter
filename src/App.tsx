import React, { useEffect, useState } from "react";
import { Router } from "./routers/router";
import { authService } from "./fb";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <div className="App">
      {init ? <Router isLoggedIn={isLoggedIn} /> : "Initailizing..."}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
