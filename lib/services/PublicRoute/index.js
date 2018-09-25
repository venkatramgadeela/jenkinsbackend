"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "src/services/PublicRoute/index.jsx";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require("react-router-dom");

var _Default = require("../../Layouts/Default");

var _Default2 = _interopRequireDefault(_Default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PublicRoute = function PublicRoute(_ref) {
  var Component = _ref.component;
  return _react2.default.createElement(_reactRouterDom.Route, {
    render: function render(props) {
      return _react2.default.createElement(
        _Default2.default,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: undefined
        },
        _react2.default.createElement(Component, Object.assign({}, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: undefined
        }))
      );
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  });
};

PublicRoute.propTypes = {
  component: _propTypes2.default.func.isRequired
};

exports.default = PublicRoute;