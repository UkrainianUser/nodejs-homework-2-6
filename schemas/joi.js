const Joi = require("joi");

const addSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	phone: Joi.string()
		.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
		.required(),
	favorite: Joi.boolean(),
});

module.exports = addSchema;
