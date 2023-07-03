const express = require("express");

const router = express.Router();

const controllers = require("../../controllers");

router.get("/", controllers.getAllContacts);

router.get("/:contactId", controllers.getById);

router.post("/", controllers.addContact);

router.delete("/:contactId", controllers.deleteContact);

router.put("/:contactId", controllers.changeContact);

router.patch("/:contactId/favorite", controllers.updateStatusContact);

module.exports = router;
