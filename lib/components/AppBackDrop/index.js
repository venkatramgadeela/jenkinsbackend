"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "src/components/AppBackDrop/index.jsx";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NavBar = require("../NavBar");

var _NavBar2 = _interopRequireDefault(_NavBar);

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppBackDrop = function AppBackDrop(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    { className: "appbackdrop", __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    },
    _react2.default.createElement(
      "h1",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: undefined
      },
      "Tesla Database and Middleware Plotform"
    ),
    _react2.default.createElement(_NavBar2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }),
    children
  );
};

AppBackDrop.propTypes = {
  children: _propTypes2.default.element.isRequired
};
exports.default = AppBackDrop;