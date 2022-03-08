"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _app = _interopRequireDefault(require("./app"));

function Index() {
  return _Index.apply(this, arguments);
}

function _Index() {
  _Index = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return {
              port: _app["default"].listen(3001),
              mesage: 'server on port 3001'
            };

          case 2:
            result = _context.sent;
            console.log(result.mesage);
            return _context.abrupt("return", result.port);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _Index.apply(this, arguments);
}

Index();