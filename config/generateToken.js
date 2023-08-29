const jwt = require("jsonwebtoken");

const generateJWT = (userId, role) => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
};

module.exports = { generateJWT };
