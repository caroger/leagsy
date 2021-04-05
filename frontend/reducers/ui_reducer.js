import { combineReducers } from "redux";
import modal from "./modal_reducer";
import errors from "./errors_reducer";

export default combineReducers({
  modal,
  errors,
});
