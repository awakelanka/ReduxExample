import { combineReducers } from "redux";
import { counterReducer, userReducer } from "./reducers";

export default combineReducers({
  counterReducer,
  userReducer
});
