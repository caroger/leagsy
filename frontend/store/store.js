import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "../reducers/root_reducer";

const middlewares = [thunk];
if (process.env.NODE_ENV !== "production") {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// TODO get rid of the redux dev tool config for production
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) =>
  createStore(
    rootReducer,
    preloadedState,
    // composeEnhancers(applyMiddleware(...middlewares))
    applyMiddleware(...middlewares)
  );

export default configureStore;
