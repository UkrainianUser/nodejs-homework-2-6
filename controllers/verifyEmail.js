const { User } = require("../models");
const { HttpError } = require("../helpers");

const verifyEmail = async (req, res) => {
	const { verificationToken } = req.params;
	const user = await User.findOne({ verificationToken });
	const { _id } = req.user;
	if (!user) {
		throw HttpError(404, "User not found");
	}
	await User.findByIdAndUpdate(_id, {
		verify: true,
		verificationToken: null,
	});

	res.status(200).json({ message: "Verification successful" });
};

module.exports = verifyEmail;
