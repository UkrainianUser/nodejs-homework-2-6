const getAllContacts = require("./getAllContacts");
const getById = require("./getById");
const addContact = require("./addContact");
const deleteContact = require("./deleteContact");
const changeContact = require("./changeContact");
const updateStatusContact = require("./updateStatusContact");
const { register } = require("./auth");

module.exports = {
	getAllContacts,
	getById,
	addContact,
	deleteContact,
	changeContact,
	updateStatusContact,
	register,
};
