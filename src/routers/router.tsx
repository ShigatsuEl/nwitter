import firebase from "firebase";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "../components/navigation";
import { Auth } from "../pages/auth";
import { Home } from "../pages/home";
import { Profile } from "../pages/profile";

interface IRouterProps {
  isLoggedIn: boolean;
  user: firebase.User | null;
  refreshUser: () => void;
}

export const Router: React.FC<IRouterProps> = ({
  isLoggedIn,
  user,
  refreshUser,
}) => {
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation user={user} />}
      <Switch>
        {isLoggedIn ? (
          <>
            <div
              style={{
                maxWidth: 890,
                width: "100%",
                margin: "0 auto",
                marginTop: 80,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Route exact path="/">
                <Home user={user} />
              </Route>
              <Route exact path="/profile">
                <Profile user={user} refreshUser={refreshUser} />
              </Route>
            </div>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};
