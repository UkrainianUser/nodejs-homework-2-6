const getAllContacts = require("./getAllContacts");
const getById = require("./getById");
const addContact = require("./addContact");
const deleteContact = require("./deleteContact");
const changeContact = require("./changeContact");
const updateStatusContact = require("./updateStatusContact");
const { register, login, logout } = require("./auth");
const getCurrent = require("./getCurrent");

module.exports = {
	getAllContacts,
	getById,
	addContact,
	deleteContact,
	changeContact,
	updateStatusContact,
	register,
	login,
	getCurrent,
	logout,
};
