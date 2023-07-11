const express = require("express");

const { schemas } = require("../../models");
const ctrl = require("../../controllers");
const {
	ctrlWrapper,
	validateBody,
	authenticate,
} = require("../../middlewares");

const router = express.Router();

router.post(
	"/register",
	validateBody(schemas.registerSchema),
	ctrlWrapper(ctrl.register)
);

router.post(
	"/login",
	validateBody(schemas.loginSchema),
	ctrlWrapper(ctrl.login)
);

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

module.exports = router;
