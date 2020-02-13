import React, { Component } from "react";
import fireb from "./components/auth/firebase";

import "./App.css";

import { Switch, Route } from "react-router-dom";

import Homepage from "./components/homepage";
import Userpage from "./components/Userpage";
import Register from "./components/Register";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "null"
    };

    this.authlistener = this.authlistener.bind(this);
  }

  componentDidMount() {
    this.authlistener();
  }

  authlistener() {
    fireb.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <Userpage />
        ) : (
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/user" component={Userpage} />
            <Route exact path="/register" component={Register} />
          </Switch>
        )}
      </div>
    );
  }
}

export default App;
