import React from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
