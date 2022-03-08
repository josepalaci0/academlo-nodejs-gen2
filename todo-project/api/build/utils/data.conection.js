"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = require("sequelize");

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config({
  path: './config.env'
});

var sequelize = new _sequelize.Sequelize({
  host: process.env.DB_HOST,
  // localhost
  username: process.env.DB_USER,
  // root
  password: process.env.DB_PASSWORD,
  port: 3002,
  database: process.env.DB,
  // postgres
  dialect: 'postgres'
});
exports.sequelize = sequelize;