"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "src/services/App.jsx";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _PublicRoute = require("./PublicRoute");

var _PublicRoute2 = _interopRequireDefault(_PublicRoute);

var _Home = require("../scenes/Home");

var _Home2 = _interopRequireDefault(_Home);

var _Jenkins = require("../scenes/Jenkins");

var _Jenkins2 = _interopRequireDefault(_Jenkins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    },
    _react2.default.createElement(
      _reactRouterDom.Switch,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: undefined
      },
      _react2.default.createElement(_PublicRoute2.default, { exact: true, path: "/", component: _Home2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: undefined
      }),
      _react2.default.createElement(_PublicRoute2.default, { exact: true, path: "/mebbackup", component: _Jenkins2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: undefined
      })
    )
  );
};

exports.default = App;