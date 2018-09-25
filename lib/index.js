"use strict";

var _jsxFileName = "src/index.jsx";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("bootstrap/dist/css/bootstrap.min.css");

var _reactRouterRedux = require("react-router-redux");

var _reactRedux = require("react-redux");

var _reactDom = require("react-dom");

require("./index.css");

var _store = require("./services/store");

var _store2 = _interopRequireDefault(_store);

var _App = require("./services/App");

var _App2 = _interopRequireDefault(_App);

var _registerServiceWorker = require("./utils/registerServiceWorker");

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootElm = document.querySelector("#root");
(0, _registerServiceWorker2.default)();

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  },
  _react2.default.createElement(
    _reactRouterRedux.ConnectedRouter,
    { history: _store.history, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    },
    _react2.default.createElement(_App2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    })
  )
), rootElm);