const path = require("path");
const fs = require("fs/promises");
const { User } = require("../models");

const avatarsDir = path.join(__dirname, "../", "public", "avatars");

const updateAvatar = async (req, res) => {
	const { _id } = req.user;
	const { path, tempUpload, originalname } = req.file;
	const resultUpload = path.join(avatarsDir, originalname);
	await fs.rename(tempUpload, resultUpload);
	const avatarURL = path.join("avatar", originalname);
	await User.findByIdAndUpdate(_id, { avatarURL });

	res.json({
		avatarURL,
	});
};

module.exports = updateAvatar;
