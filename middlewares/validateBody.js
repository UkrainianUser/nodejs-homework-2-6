const { BadRequest } = require("http-errors");

const validateBody = (schema) => {
	return (req, res, next) => {
		const { error } = schema.validate(req.body);
		if (error) {
			next(new BadRequest(error.message));
			return;
		}
		next();
	};
};

module.exports = validateBody;
