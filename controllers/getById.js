const { Contact } = require("../models");
const { HttpError } = require("../helpers");

const getById = async (req, res, next) => {
	try {
		const { contactId } = req.params;
		const result = await Contact.findById(contactId);
		if (!result) {
			throw HttpError(404, "Not Found");
		}
		res.json(result);
	} catch (error) {
		next(error);
	}
};

module.exports = getById;
