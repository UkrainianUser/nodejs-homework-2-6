const express = require("express");

const router = express.Router();

const controllers = require("../../controllers");
const authenticate = require("../../middlewares");

router.get("/", authenticate, controllers.getAllContacts);

router.get("/:contactId", authenticate, controllers.getById);

router.post("/", authenticate, controllers.addContact);

router.delete("/:contactId", authenticate, controllers.deleteContact);

router.put("/:contactId", authenticate, controllers.changeContact);

router.patch(
	"/:contactId/favorite",
	authenticate,
	controllers.updateStatusContact
);

module.exports = router;
