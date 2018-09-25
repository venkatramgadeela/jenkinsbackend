"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "src/components/BackgroundImage/index.jsx";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _backgroundModel3Blue = require("../../assets/background-model3-blue.jpg");

var _backgroundModel3Blue2 = _interopRequireDefault(_backgroundModel3Blue);

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackgroundImage = function BackgroundImage() {
  return _react2.default.createElement("div", { className: "homeimage", style: { backgroundImage: "url(" + _backgroundModel3Blue2.default + ")" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  });
};

exports.default = BackgroundImage;