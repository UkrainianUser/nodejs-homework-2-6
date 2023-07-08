const express = require("express");

const { schemas } = require("../../models");
const ctrl = require("../../controllers");
const { ctrlWrapper, validateBody } = require("../../middlewares");

const router = express.Router();

router.post(
	"/register",
	validateBody(schemas.registerSchema),
	ctrlWrapper(ctrl.register)
);

module.exports = router;
