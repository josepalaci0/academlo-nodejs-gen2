"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = require("body-parser");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _rotute = _interopRequireDefault(require("./routers/rotute.person"));

var _route = _interopRequireDefault(require("./routers/route.users"));

var _data = require("./utils/data.conection");

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use((0, _bodyParser.json)());
app.use('/api/v1/ToDos/person', _rotute["default"]);
app.use('/api/v1/ToDos/users', _route["default"]);

_data.sequelize.authenticate().then(function () {
  return console.log('Database authenticated');
})["catch"](function (error) {
  return console.log(error);
});

_data.sequelize.sync().then(function () {
  return console.log('Database synced');
})["catch"](function (error) {
  return console.log(error);
});

var _default = app;
exports["default"] = _default;