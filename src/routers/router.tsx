import { Navigation } from "components/navigation";
import { Profile } from "pages/profile";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Auth } from "../pages/auth";
import { Home } from "../pages/home";

interface IRouterProps {
  isLoggedIn: boolean;
}

export const Router: React.FC<IRouterProps> = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <React.Fragment>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
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
