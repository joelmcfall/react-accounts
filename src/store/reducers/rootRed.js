import authRed from "./authRed";
import listRed from "./listRed";

import { combineReducers } from "redux";
import { FirebaseReducer, FirestoreReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authRed,
  list: listRed,
  firebase: FirebaseReducer,
  firestore: FirestoreReducer
});

export default rootReducer;
