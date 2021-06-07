import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { Router } from "./routers/router";
import { authService } from "./fb";

function App() {
  const [init, setInit] = useState(false);
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setInit(true);
    });
  }, []);

  return (
    <div className="App">
      {init ? (
        <Router isLoggedIn={Boolean(user)} user={user} />
      ) : (
        "Initailizing..."
      )}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
