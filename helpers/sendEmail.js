const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
	host: "smpt.meta.ua",
	port: 465,
	secure: true,
	auth: {
		user: "ostapenko.serhii@meta.ua",
		pass: META_PASSWORD,
	},
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (toEmail) => {
	const email = {
		to: toEmail,
		from: "ostapenko.serhii@meta.ua",
		subject: "Test email",
		html: "<h1>Test email</h1>",
	};

	await transport
		.sendmail(email)
		.then(() => console.log("Email send success"))
		.catch((error) => console.log(error.message));
};

module.exports = sendEmail;
