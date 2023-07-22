require("dotenv").config();
const nodemailer = require("nodemailer");

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
	host: "smtp.meta.ua",
	port: 465,
	secure: true,
	auth: {
		user: "ostapenko.serhii@meta.ua",
		pass: META_PASSWORD,
	},
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
	const email = { ...data, from: "ostapenko.serhii@meta.ua" };
	try {
		await transporter.sendMail(email);
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports = sendEmail;
