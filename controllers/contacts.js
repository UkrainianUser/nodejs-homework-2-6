const mongoose = require("mongoose");
const contacts = require("../models/contacts");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const { HttpError } = require("../helpers");

const addSchema = require("../schemas/joi");

const getAllContacts = async (req, res, next) => {
	try {
		const result = await contacts.listContacts();
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const getById = async (req, res, next) => {
	try {
		const { contactId } = req.params;
		const result = await contacts.getContactById(contactId);
		if (!result) {
			throw HttpError(404, "Not Found");
		}
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const addContact = async (req, res, next) => {
	try {
		const { error } = addSchema.validate(req.body);
		console.log(error);
		if (error) {
			throw HttpError(400, "missing required name field");
		}
		const result = await contacts.addContact(req.body);
		res.status(201).json(result);
	} catch (error) {
		next(error);
	}
};

const deleteContact = async (req, res, next) => {
	try {
		const { contactId } = req.params;
		const result = await contacts.removeContact(contactId, req.body);
		if (!result) {
			throw HttpError(404, "Not found");
		}
		res.json({ message: "contact deleted" });
	} catch (error) {
		next(error);
	}
};

const changeContact = async (req, res, next) => {
	try {
		const { error } = addSchema.validate(req.body);
		if (error) {
			throw HttpError(400, "missing fields");
		}
		const { contactId } = req.params;
		const result = await contacts.updateContact(contactId, req.body);
		if (!result) {
			throw HttpError(404, "Not found");
		}
		res.json(result);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllContacts,
	getById,
	addContact,
	deleteContact,
	changeContact,
};
