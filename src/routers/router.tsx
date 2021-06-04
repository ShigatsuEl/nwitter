import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Auth } from "../pages/auth";
import { Home } from "../pages/home";

export const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
