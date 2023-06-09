import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";

export default combineReducers({
  // All reducers of the whole === reducers container
  userReducer,
  postReducer,
});
