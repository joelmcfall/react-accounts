import authRed from "./authRed";
import listRed from "./listRed";

import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authRed,
  list: listRed,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
