import authRed from "./authRed";
import listRed from "./listRed";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authRed,
  list: listRed
});

export default rootReducer;
