 const validateRefreshToken = (req, res, next) => {
  const token = req.cookies?.refreshToken; // Or from header

  if (!token) return res.status(401).json({ message: 'Missing token' });

  jwt.verify(token, process.env.REFRESH_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user; // contains id, email etc.
    next();
  });
};
export default validateRefreshToken