import {
  RECEIVE_PRODUCT,
  RECEIVE_REVIEW,
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT_ERRORS,
  START_LOADING_PRODUCT,
  START_LOADING_PRODUCTS,
} from "../actions/product_actions";

const initialState = {
  indexLoading: false,
  detailLoading: false,
};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_PRODUCT:
    case RECEIVE_PRODUCT_ERRORS:
      return Object.assign({}, state, { detailLoading: false });
    case START_LOADING_PRODUCTS:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_PRODUCT:
      return Object.assign({}, state, { detailLoading: true });
    default:
      return state;
  }
};
