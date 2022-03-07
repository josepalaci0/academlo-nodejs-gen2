"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPerson = createPerson;
exports.getAllPerson = getAllPerson;
exports.getOnePerson = getOnePerson;
exports.updatePerson = updatePerson;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = _interopRequireDefault(require("../models/model.person"));

function getAllPerson(_x, _x2) {
  return _getAllPerson.apply(this, arguments);
}

function _getAllPerson() {
  _getAllPerson = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var person;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _model["default"].findAll();

          case 3:
            person = _context.sent;
            res.status(200).json({
              statu: 'success',
              data: {
                person: person
              }
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              statu: 'wrong access',
              data: {}
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getAllPerson.apply(this, arguments);
}

function createPerson(_x3, _x4) {
  return _createPerson.apply(this, arguments);
}

function _createPerson() {
  _createPerson = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, lastName, firstName, address, city, newPerson;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, lastName = _req$body.lastName, firstName = _req$body.firstName, address = _req$body.address, city = _req$body.city;
            _context2.prev = 1;
            _context2.next = 4;
            return _model["default"].create({
              lastName: lastName,
              firstName: firstName,
              address: address,
              city: city
            }, {
              fields: ['lastName', 'firstName', 'address', 'city']
            });

          case 4:
            newPerson = _context2.sent;

            if (newPerson) {
              res.status(201).json({
                status: 'Person created successfully',
                data: {
                  newPerson: newPerson
                }
              });
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              status: 'failed operation',
              data: {}
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _createPerson.apply(this, arguments);
}

function getOnePerson(_x5, _x6) {
  return _getOnePerson.apply(this, arguments);
}

function _getOnePerson() {
  _getOnePerson = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, person;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _model["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            person = _context3.sent;
            res.status(200).json({
              statu: 'success',
              data: {
                person: person
              }
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              statu: 'wrong access',
              data: {}
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getOnePerson.apply(this, arguments);
}

function updatePerson(_x7, _x8) {
  return _updatePerson.apply(this, arguments);
}

function _updatePerson() {
  _updatePerson = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, lastName, firstName, address, city, person;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, lastName = _req$body2.lastName, firstName = _req$body2.firstName, address = _req$body2.address, city = _req$body2.city;
            _context5.prev = 2;
            _context5.next = 5;
            return _model["default"].findAll({
              attributes: ['id', 'lastName', 'firstName', 'address', 'city'],
              where: {
                id: id
              }
            });

          case 5:
            person = _context5.sent;

            if (person.length > 0) {
              person.forEach( /*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(person) {
                  return _regenerator["default"].wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return person.update({
                            lastName: lastName,
                            firstName: firstName,
                            address: address,
                            city: city
                          });

                        case 2:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x9) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context5.abrupt("return", res.status(201).json({
              status: 'Person Updated successfully',
              data: {
                person: person
              }
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            res.status(500).json({
              status: 'failed operation',
              data: {}
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));
  return _updatePerson.apply(this, arguments);
}