"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "src/scenes/Jenkins/index.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reactstrap = require("reactstrap");

var _BackgroundImage = require("../../components/BackgroundImage");

var _BackgroundImage2 = _interopRequireDefault(_BackgroundImage);

var _LoadingSpinner = require("../../components/LoadingSpinner");

var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);

var _actions = require("../../services/Jenkins/actions");

var actionCreators = _interopRequireWildcard(_actions);

var _AppBackDrop = require("../../components/AppBackDrop");

var _AppBackDrop2 = _interopRequireDefault(_AppBackDrop);

require("./index.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Jenkins = function (_Component) {
  _inherits(Jenkins, _Component);

  function Jenkins(props) {
    _classCallCheck(this, Jenkins);

    var _this = _possibleConstructorReturn(this, (Jenkins.__proto__ || Object.getPrototypeOf(Jenkins)).call(this, props));

    _this.state = {
      fields: {},
      errors: {}
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Jenkins, [{
    key: "handleChange",
    value: function handleChange(e) {
      var fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields: fields
      });
      // this.setState({ value: e.target.value });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      if (this.validateForm()) {
        var servername = this.state.fields;
        this.props.actions.triggerJenJob(servername);
      }
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var fields = this.state.fields;
      var errors = {};
      var formIsValid = true;

      if (!fields.servername) {
        formIsValid = false;
        errors.servername = "*Please enter servername.";
      }

      this.setState({
        errors: errors
      });
      return formIsValid;
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.jobs);
      if (this.props.jobs.loading) {
        return _react2.default.createElement(_LoadingSpinner2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        });
      }
      return _react2.default.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        },
        _react2.default.createElement(_BackgroundImage2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }),
        _react2.default.createElement(
          _reactstrap.Container,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          },
          _react2.default.createElement(
            _AppBackDrop2.default,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              },
              __self: this
            },
            _react2.default.createElement(
              _reactstrap.Row,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 81
                },
                __self: this
              },
              _react2.default.createElement(
                _reactstrap.Col,
                { sm: { size: 6, offset: 3 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  },
                  __self: this
                },
                _react2.default.createElement(
                  "div",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 83
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    _reactstrap.Form,
                    { onSubmit: this.handleSubmit, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      _reactstrap.FormGroup,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 85
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { "for": "servername", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 86
                          },
                          __self: this
                        },
                        "Server Name"
                      ),
                      _react2.default.createElement(_reactstrap.Input, {
                        type: "text",
                        id: "servername",
                        name: "servername",
                        placeholder: "Enter server name",
                        onChange: this.handleChange,
                        value: this.state.servername,
                        autoComplete: "off",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 87
                        },
                        __self: this
                      }),
                      _react2.default.createElement(
                        "div",
                        { className: "errorMsg", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 96
                          },
                          __self: this
                        },
                        this.state.errors.servername
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.FormGroup,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 100
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        _reactstrap.Button,
                        { type: "submit", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 101
                          },
                          __self: this
                        },
                        "Submit"
                      )
                    ),
                    this.props.jobs.entities.message ? _react2.default.createElement(
                      _reactstrap.FormGroup,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 104
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        "p",
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 105
                          },
                          __self: this
                        },
                        "backup success..!"
                      )
                    ) : null,
                    this.props.jobs.error ? _react2.default.createElement(
                      _reactstrap.FormGroup,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 109
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        "p",
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 110
                          },
                          __self: this
                        },
                        "backup failed, Please contact DBA for futher assistance..!"
                      )
                    ) : null
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Jenkins;
}(_react.Component);

Jenkins.propTypes = {
  actions: _propTypes2.default.shape({
    triggerJenJob: _propTypes2.default.func.isRequired
  }).isRequired,
  jobs: _propTypes2.default.shape({
    loading: _propTypes2.default.bool.isRequired,
    entities: _propTypes2.default.object.isRequired,
    error: _propTypes2.default.bool.isRequired
  }).isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    jobs: state.Jenkins
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actionCreators, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Jenkins);