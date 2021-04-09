import { combineReducers } from "redux";

import users from "./users_reducer";
import products from "./product_reducer";
import reviews from "./review_reducer";
import cartItems from "./cart_item_reducer";

export default combineReducers({
  users,
  products,
  reviews,
  cartItems,
});
