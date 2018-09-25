import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware, routerReducer } from "react-router-redux";
// import invariant from 'redux-immutable-state-invariant';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import createHistory from "history/createBrowserHistory";

// Reducers
import auth from "./Auth/reducer";
import Jenkins from "./Jenkins/reducer";
import Accessusers from "./Accessusers/reducer";
// Combine all available reducers
const appReducer = combineReducers({
  routing: routerReducer,
  Jenkins,
  Accessusers,
  auth
  //   form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export const history = createHistory();

// Initialize state, enhancers, and configure middleware
const initialState = {};
const enhancers = [];
const middleware = [promise(), thunk, routerMiddleware(history)];

// Composing Middleware and Enhancers
const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers
);

// Creating Store with Root Reducer, Initial State, and Middleware
const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
