import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import firebConfig from "./components/auth/firebase";
import firebase from "firebase";
import reduxStore from "./components/auth/reduxStore";

import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

const store = reduxStore();

const rrfProps = {
  firebase,
  config: firebConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <HashRouter>
    {" "}
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        {" "}
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
