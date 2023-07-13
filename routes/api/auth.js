const express = require("express");

const { schemas } = require("../../models");
const ctrl = require("../../controllers");
const {
	ctrlWrapper,
	validateBody,
	authenticate,
	upload,
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

router.patch(
	"/avatar",
	authenticate,
	upload.single("avatar"),
	ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
