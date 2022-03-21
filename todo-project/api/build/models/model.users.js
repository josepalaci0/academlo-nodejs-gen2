"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _data = require("../utils/data.conection");

var Users = _data.sequelize.define('users', {
  id: {
    type: _sequelize.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  typeUser: {
    type: _sequelize.Sequelize.STRING(100),
    allowNull: false
  },
  dateRegistration: {
    type: _sequelize.Sequelize.STRING(100),
    allowNull: false
  },
  assignedUser: {
    type: _sequelize.Sequelize.STRING(100),
    allowNull: false
  },
  status: {
    type: _sequelize.Sequelize.STRING(100),
    allowNull: false
  },
  idUser: {
    type: _sequelize.Sequelize.INTEGER,
    allowNull: false
  }
});

var _default = Users;
exports["default"] = _default;