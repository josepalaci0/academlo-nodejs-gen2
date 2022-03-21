"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
exports.getOneUser = getOneUser;
exports.getUsersByPerson = getUsersByPerson;
exports.updateUser = updateUser;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = _interopRequireDefault(require("../models/model.users"));

function createUser(_x, _x2) {
  return _createUser.apply(this, arguments);
}

function _createUser() {
  _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, typeUser, dateRegistration, assignedUser, status, idUser, newUser;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, typeUser = _req$body.typeUser, dateRegistration = _req$body.dateRegistration, assignedUser = _req$body.assignedUser, status = _req$body.status, idUser = _req$body.idUser;
            _context.prev = 1;
            _context.next = 4;
            return _model["default"].create({
              typeUser: typeUser,
              dateRegistration: dateRegistration,
              assignedUser: assignedUser,
              status: status,
              idUser: idUser
            }, {
              fields: ['typeUser', 'dateRegistration', 'assignedUser', 'status', 'idUser']
            });

          case 4:
            newUser = _context.sent;

            if (newUser) {
              res.status(201).json({
                status: 'User created successfully',
                data: {
                  newUser: newUser
                }
              });
            }

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              status: 'failed operation',
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _createUser.apply(this, arguments);
}

function getAllUsers(_x3, _x4) {
  return _getAllUsers.apply(this, arguments);
}

function _getAllUsers() {
  _getAllUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _model["default"].findAll();

          case 3:
            users = _context2.sent;
            res.status(200).json({
              statu: 'success',
              data: {
                users: users
              }
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              statu: 'wrong access',
              data: {}
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getAllUsers.apply(this, arguments);
}

function getOneUser(_x5, _x6) {
  return _getOneUser.apply(this, arguments);
}

function _getOneUser() {
  _getOneUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, user;
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
            user = _context3.sent;
            res.status(200).json({
              statu: 'success',
              data: {
                user: user
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
  return _getOneUser.apply(this, arguments);
}

function updateUser(_x7, _x8) {
  return _updateUser.apply(this, arguments);
}

function _updateUser() {
  _updateUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, typeUser, dateRegistration, assignedUser, status, idUser, user;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, typeUser = _req$body2.typeUser, dateRegistration = _req$body2.dateRegistration, assignedUser = _req$body2.assignedUser, status = _req$body2.status, idUser = _req$body2.idUser;
            _context5.prev = 2;
            _context5.next = 5;
            return _model["default"].findAll({
              attributes: ['id', 'typeUser', 'dateRegistration', 'assignedUser', 'status', 'idUser'],
              where: {
                id: id
              }
            });

          case 5:
            user = _context5.sent;

            if (user.length > 0) {
              user.forEach( /*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(user) {
                  return _regenerator["default"].wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return user.update({
                            typeUser: typeUser,
                            dateRegistration: dateRegistration,
                            assignedUser: assignedUser,
                            status: status,
                            idUser: idUser
                          });

                        case 2:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context5.abrupt("return", res.status(201).json({
              status: 'User Updated successfully',
              data: {
                user: user
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
  return _updateUser.apply(this, arguments);
}

function getUsersByPerson(_x9, _x10) {
  return _getUsersByPerson.apply(this, arguments);
}

function _getUsersByPerson() {
  _getUsersByPerson = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var idUser, users;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            idUser = req.params.idUser;
            _context6.prev = 1;
            _context6.next = 4;
            return _model["default"].findAll({
              attributes: ['id', 'typeUser', 'dateRegistration', 'assignedUser', 'status', 'idUser'],
              where: {
                idUser: idUser
              }
            });

          case 4:
            users = _context6.sent;
            res.status(200).json({
              status: 'success',
              data: {
                users: users
              }
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            res.status(500).json({
              status: 'error',
              message: 'User not found'
            });

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _getUsersByPerson.apply(this, arguments);
}