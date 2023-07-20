const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
	host: "smpt.meta.ua",
	port: 465,
	secure: true,
	auth: {
		user: "fokaw41941@muzitp.com",
		pass: META_PASSWORD,
	},
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = () => {
	const email = {
		to: "fokaw41941@muzitp.com",
		from: "ostapenko.serhii@meta.ua",
		subject: "Test email",
		html: "<h1>Test email</h1>",
	};

	transport
		.sendMail(email)
		.then(() => console.log("Email send success"))
		.catch((error) => console.log(error.message));
};

module.exports = sendEmail;
