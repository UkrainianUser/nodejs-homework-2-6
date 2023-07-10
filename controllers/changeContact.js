const { Contact } = require("../models");
const { HttpError } = require("../helpers");
const addSchema = require("../schemas");

const changeContact = async (req, res, next) => {
	try {
		const { error } = addSchema.validate(req.body);
		if (error) {
			throw HttpError(400, "missing fields");
		}
		const { contactId } = req.params;
		const result = await Contact.findByIdAndUpdate(contactId, req.body);
		if (!result) {
			throw HttpError(404, "Not found");
		}
		res.json(result);
	} catch (error) {
		next(error);
	}
};

module.exports = changeContact;
