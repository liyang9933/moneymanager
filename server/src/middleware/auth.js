const jwt = require('jsonwebtoken');
const SECRET = "Liyang";

module.exports = (req, res, next) => {
  const token = req.get('Authorization').split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};
