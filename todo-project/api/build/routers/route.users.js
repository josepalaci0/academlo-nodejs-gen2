"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = require("../controllers/controller.users");

var router = (0, _express.Router)();
router.post('/', _controller.createUser);
router.get('/', _controller.getAllUsers);
router.get('/:id', _controller.getOneUser);
router.put('/:id', _controller.updateUser); //--> /api/v1/ToDos/users/person

router.get('/person/:idUser', _controller.getUsersByPerson);
var _default = router;
exports["default"] = _default;