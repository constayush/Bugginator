import jwt from "jsonwebtoken";

export const authenticateUser = (req, res, next) => {
  const token = req.cookies.accessToken; 

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authenticated. No token provided.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
