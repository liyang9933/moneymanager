const jwt = require('jsonwebtoken');
const User = require('../models/User');
const md5 = require('md5');
const SECRET = "Liyang";

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const createUser = await User.create({
      username: username,
      password: md5(password) // Security
    });
    return res.status(200).json({ message: "Success" });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating account', error });
  }
}

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const getUsername = await User.findOne({
      username: username,
      password: md5(password)
    });
    if (!getUsername) return res.status(401).json({ message: "Username/password incorrect", getUsername: null });
    const token = jwt.sign({
      username: getUsername.username,
      _id: getUsername._id
    }, SECRET, { expiresIn: 86400 });
    // response to token
    return res.status(200).json({ message: "Login Success", token });
  } catch (error) {
    return res.status(500).json({ message: 'Error login', error });
  }
}