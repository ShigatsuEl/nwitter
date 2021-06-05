import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Auth } from "../pages/auth";
import { Home } from "../pages/home";

interface IRouterProps {
  isLoggedIn: boolean;
}

export const Router: React.FC<IRouterProps> = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      <Switch>
        {isLoggedIn ? (
          <React.Fragment>
            <Route exact path="/">
              <Home />
            </Route>
          </React.Fragment>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
};
