//authMiddleware.js
const jwt = require("jsonwebtoken");
const HttpError = require("../helpers/HttpError");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return next(HttpError(401, "Нет токена, авторизация отклонена"));
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return next(HttpError(401, "Неверный формат токена"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return next(HttpError(401, "Токен истек"));
    }
    next(HttpError(401, "Токен недействителен"));
  }
};

module.exports = authMiddleware;
