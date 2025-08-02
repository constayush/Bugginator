import rateLimit from "express-rate-limit";

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  message: "Too many requests, chill for 15 minutes 😴",
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { authLimiter };
