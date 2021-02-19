import { combineReducers } from "redux";
import sessionErrosReducer from "./session_errors_reducer";
import productErrosReducer from "./product_errors_reducer";

export default combineReducers({
  session: sessionErrosReducer,
  product: productErrosReducer,
});
