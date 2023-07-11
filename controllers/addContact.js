const { Contact } = require("../models");
const { HttpError } = require("../helpers");
const addSchema = require("../schemas");

const addContact = async (req, res, next) => {
	try {
		const { error } = addSchema.validate(req.body);
		console.log(error);
		if (error) {
			throw HttpError(400, "missing required name field");
		}
		const { _id: owner } = req.user;
		const result = await Contact.create({ ...req.body, owner });
		res.status(201).json(result);
	} catch (error) {
		next(error);
	}
};

module.exports = addContact;
