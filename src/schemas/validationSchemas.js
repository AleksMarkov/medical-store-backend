//validationSchemas.js
const Joi = require("joi");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required().messages({
    "string.pattern.base": "Invalid email format",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).max(64).required().messages({
    "string.min": "Password must have at least 6 characters",
    "string.max": "Password must not exceed 64 characters",
    "any.required": "Password is required",
  }),
});

const userRegistrationSchema = Joi.object({
  name: Joi.string().min(2).max(32).required().messages({
    "string.min": "Name must have at least 2 characters",
    "string.max": "Name must not exceed 32 characters",
    "any.required": "Name is required",
  }),
  email: Joi.string().pattern(emailRegex).required().messages({
    "string.pattern.base": "Invalid email format",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).max(64).required().messages({
    "string.min": "Password must have at least 6 characters",
    "string.max": "Password must not exceed 64 characters",
    "any.required": "Password is required",
  }),
});

module.exports = { userLoginSchema, userRegistrationSchema };
