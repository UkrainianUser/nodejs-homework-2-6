const { User } = require("../models");
const { HttpError } = require("../helpers");

const verifyEmail = async (req, res) => {
	const { verificationToken } = req.params;
	const user = await User.findOne({ verificationToken });
	res.json(user);
	if (!user) {
		throw HttpError(404, "User not found");
	}
	await User.findByIdAndUpdate(user._id, {
		verify: true,
		verificationToken: null,
	});

	// res.json({ message: "Verification successful" });
};

module.exports = verifyEmail;
