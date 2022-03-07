"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _data = require("../utils/data.conection");

var _model = _interopRequireDefault(require("./model.users"));

var Person = _data.sequelize.define('person', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  lastName: {
    type: _sequelize["default"].STRING(100),
    allowNull: false
  },
  firstName: {
    type: _sequelize["default"].STRING(100),
    allowNull: false
  },
  address: {
    type: _sequelize["default"].STRING(100),
    allowNull: false
  },
  city: {
    type: _sequelize["default"].STRING(100),
    allowNull: false
  }
});

Person.hasMany(_model["default"], {
  foreignKey: 'idUser',
  sourceKey: 'id'
});

_model["default"].belongsTo(Person, {
  foreignKey: 'idUser',
  sourceKey: 'id'
});

var _default = Person;
exports["default"] = _default;