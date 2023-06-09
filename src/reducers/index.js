import { combineReducers } from "redux";
import userReducer from "./userReducer";

export default combineReducers({
  // All reducers of the whole === reducers container
  userReducer,
});
