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
}

export const Router: React.FC<IRouterProps> = ({ isLoggedIn, user }) => {
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation user={user} />}
      <Switch>
        {isLoggedIn ? (
          <React.Fragment>
            <Route exact path="/">
              <Home user={user} />
            </Route>
            <Route exact path="/profile">
              <Profile user={user} />
            </Route>
          </React.Fragment>
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
