//authMiddleware.js
const jwt = require("jsonwebtoken");
const HttpError = require("../helpers/HttpError");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return next(HttpError(401, "Нет токена, авторизация отклонена"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    next(HttpError(401, "Токен недействителен"));
  }
};

module.exports = authMiddleware;
