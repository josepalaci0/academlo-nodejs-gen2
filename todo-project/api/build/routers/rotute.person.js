"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = require("../controllers/controller.person");

var router = (0, _express.Router)();
router.get('/', _controller.getAllPerson);
router.get('/:id', _controller.getOnePerson);
router.post('/', _controller.createPerson);
router.put('/:id', _controller.updatePerson);
var _default = router;
exports["default"] = _default;