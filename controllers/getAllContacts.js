const { Contact } = require("../models");

const getAllContacts = async (req, res, next) => {
	const { _id: owner } = req.user;
	try {
		const result = await Contact.find(
			{ owner },
			"-createAt -updateAt"
		).populate("owner", "subscription email");
		res.json(result);
	} catch (error) {
		next(error);
	}
};

module.exports = getAllContacts;
