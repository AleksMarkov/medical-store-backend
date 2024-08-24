//validateBody.js
const Joi = require("joi");
const HttpError = require("../helpers/HttpError");

const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(HttpError(400, error.details[0].message));
    }
    next();
  };
};

module.exports = validateBody;
