import React from "react";

import { Switch, Route } from "react-router-dom";

import Homepage from "./components/homepage";
import Login from "./components/login";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default Main;
