const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_KEY = process.env.secret_key;

const auth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, JWT_KEY);
    req.user = decoded;

    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).json({ msg: 'User not found, authorization denied' });

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};


module.exports = auth;
