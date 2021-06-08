import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { Router } from "./routers/router";
import { authService } from "./fb";

interface IFirebase extends firebase.User {
  reloadUser?: () => void;
}

function App() {
  const [init, setInit] = useState(false);
  const [user, setUser] = useState<IFirebase | null>(null);

  const refreshUser = async () => {
    user?.reloadUser!();
  };

  useEffect(() => {
    authService.onAuthStateChanged((user: IFirebase | null) => {
      if (user) {
        user.reloadUser = () => {
          setUser(null);
          setUser(() => authService.currentUser);
        };
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
        <Router
          isLoggedIn={Boolean(user)}
          user={user}
          refreshUser={refreshUser}
        />
      ) : (
        "Initailizing..."
      )}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
