"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "src/Layouts/Default/index.jsx";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = require("../../components/Header");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require("../../components/Footer");

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultLayout = function DefaultLayout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: undefined
    },
    _react2.default.createElement(_Header2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }),
    _react2.default.createElement(
      "main",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: undefined
      },
      children
    ),
    _react2.default.createElement(_Footer2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    })
  );
};

DefaultLayout.propTypes = {
  children: _propTypes2.default.element.isRequired
};

exports.default = DefaultLayout;