import {RECEIVE_PRODUCT_ERRORS, CLEAR_PRODUCT_ERRORS } from '../actions/product_actions'

const productErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_PRODUCT_ERRORS:
      return action.errors;
    case CLEAR_PRODUCT_ERRORS:
      return [];
    default:
      return oldState
  }
}

export default productErrorsReducer