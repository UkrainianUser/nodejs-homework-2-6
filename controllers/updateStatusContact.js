const { Contact } = require("../models");
const { HttpError } = require("../helpers");

const updateStatusContact = async (req, res, next) => {
	try {
		const { contactId } = req.params;
		const favorite = req.body;
		const result = await Contact.findByIdAndUpdate(
			contactId,
			favorite,
			req.body
		);
		if (!result) {
			throw HttpError(404, "missing field favorite");
		}
		res.json(result);
	} catch (error) {
		next(error);
	}
};

module.exports = updateStatusContact;
