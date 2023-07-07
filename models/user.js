const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const userSchema = new Schema(
	{
		password: {
			type: String,
			required: [true, "Set password for user"],
		},
		email: {
			type: String,
			match: emailRegExp,
			required: [true, "Email is required"],
			unique: true,
		},
		subscription: {
			type: String,
			enum: ["starter", "pro", "business"],
			default: "starter",
		},
		token: String,
	},
	{ versionKey: false, timestamps: true }
);

userSchema.post("save");

const registerSchema = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().pattern(emailRegExp).required,
	subscription: Joi.string()
		.validate(["starter", "pro", "business"])
		.optional(),
});

const loginSchema = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().pattern(emailRegExp).required,
});

const schemas = {
	registerSchema,
	loginSchema,
};

const User = model("user", userSchema);

module.exports = {
	User,
	schemas,
};
