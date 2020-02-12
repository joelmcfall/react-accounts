import React from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";

import Homepage from "./components/homepage";
import Userpage from "./components/Userpage";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/user" component={Userpage} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
