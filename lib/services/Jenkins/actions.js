"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triggerJenJob = exports.MEB_FETCH_REJECTED = exports.MEB_FETCH_SUCCESS = exports.MEB_FETCH_PENDING = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var MEB_FETCH_PENDING = exports.MEB_FETCH_PENDING = "MEB_FETCH_PENDING";
var MEB_FETCH_SUCCESS = exports.MEB_FETCH_SUCCESS = "MEB_FETCH_SUCCESS";
var MEB_FETCH_REJECTED = exports.MEB_FETCH_REJECTED = "MEB_FETCH_REJECTED";

var triggerJenJob = exports.triggerJenJob = function triggerJenJob(servername) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //   console.log(servername);
              dispatch({
                type: MEB_FETCH_PENDING
              });
              _context.prev = 1;
              _context.next = 4;
              return _axios2.default.post("http://localhost:3000/jenkins", servername);

            case 4:
              res = _context.sent;

              dispatch({
                type: MEB_FETCH_SUCCESS,
                payload: res.data
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);

              dispatch({
                type: MEB_FETCH_REJECTED,
                payload: "there is a problem with jenkins"
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[1, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};