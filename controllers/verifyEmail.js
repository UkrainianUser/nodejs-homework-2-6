const { User } = require("../models");
const { HttpError } = require("../helpers");

const verifyEmail = async (req, res) => {
	const { verificationToken } = req.query;
	const user = await User.findOne({ verificationToken });
	if (!user) {
		throw HttpError(404, "User not found");
	}
	await User.findByIdAndUpdate(user._id, {
		verify: true,
		verificationToken: null,
	});

	res.json({ message: "Verification successful" });
};

module.exports = verifyEmail;
