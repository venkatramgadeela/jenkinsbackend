"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.MEB_FETCH_PENDING:
      return Object.assign({}, state, {
        loading: true
      });
    case _actions.MEB_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        entities: action.payload
      });
    case _actions.MEB_FETCH_REJECTED:
      return Object.assign({}, state, {
        loading: false,
        error: true
      });
    default:
      return state;
  }
};

var _actions = require("./actions");

var initialState = {
  loading: false,
  error: false,
  entities: {}
};