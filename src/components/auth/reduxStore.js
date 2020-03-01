import firebase from "firebase";
import rootReducer from "../../store/reducers/rootRed";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import fireb from "./firebase";

const initState = {};

export default () => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(firebase, fireb)
    )
  );
};
