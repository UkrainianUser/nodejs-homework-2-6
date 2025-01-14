const { HttpError } = require("../helpers");
const { User } = require("../models");

const resendVerifyEmail = async (req, res) => {
	const { email } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		throw HttpError(401, "missing required field email");
	}
	if (user.verify) {
		throw HttpError(400, "Verification has already been passed");
	}

	const verifyEmail = {
		to: email,
		subject: "Verify email",
		html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click verify email</a>`,
	};

	await sendEmail(verifyEmail);

	res.status(201).json({
		massage: "Verification email sent",
	});
};

module.exports = resendVerifyEmail;
