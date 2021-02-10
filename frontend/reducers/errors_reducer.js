import { combineReducers } from "redux";
import sessionErrosReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrosReducer,
});

export default errorsReducer;
