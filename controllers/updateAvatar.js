const path = require("path");
const Jimp = require("jimp");
const fs = require("fs/promises");
const { User } = require("../models");

const avatarsDir = path.join(__dirname, "../", "public", "avatars");

const updateAvatar = async (req, res) => {
	const { _id } = req.user;
	const { path: tempUpload, originalname } = req.file;
	const filename = `${_id}_${originalname}`;
	const resultUpload = path.join(avatarsDir, filename);

	try {
		const image = await Jimp.read(tempUpload);
		await image.cover(250, 250).writeAsync(resultUpload);

		const avatarURL = path.join("avatars", filename);
		await User.findByIdAndUpdate(_id, { avatarURL });

		res.json({
			avatarURL,
		});
	} catch (error) {
		throw error;
	}
};

module.exports = updateAvatar;
