const Contact = require("../models");

const getAllContacts = async (req, res, next) => {
	try {
		console.log(req);
		const result = await Contact.find();
		res.json(result);
	} catch (error) {
		next(error);
	}
};

module.exports = getAllContacts;
