"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reactRouterRedux = require("react-router-redux");

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = require("redux-promise-middleware");

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _createBrowserHistory = require("history/createBrowserHistory");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reducer = require("./Jenkins/reducer");

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combine all available reducers

// import invariant from 'redux-immutable-state-invariant';
var appReducer = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  Jenkins: _reducer2.default
  //   form: formReducer,
  // auth,
});

// Reducers
// import auth from './services/Auth/reducer';


var rootReducer = function rootReducer(state, action) {
  return appReducer(state, action);
};

var history = exports.history = (0, _createBrowserHistory2.default)();

// Initialize state, enhancers, and configure middleware
var initialState = {};
var enhancers = [];
var middleware = [(0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history)];

// Composing Middleware and Enhancers
var composedEnhancers = _reduxDevtoolsExtension.composeWithDevTools.apply(undefined, [_redux.applyMiddleware.apply(undefined, middleware)].concat(enhancers));

// Creating Store with Root Reducer, Initial State, and Middleware
var store = (0, _redux.createStore)(rootReducer, initialState, composedEnhancers);

exports.default = store;