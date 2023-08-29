const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    const tokenCookie = req.cookies.access_token; // Access the token cookie
    if (!tokenCookie) {
      return res.redirect("/teacher/login");
    }

    const decoded = await jwt.verify(tokenCookie, process.env.JWT_SECRET);

    if (decoded) {
      return next();
    } else {
      return res.redirect("/teacher/login");
    }
  } catch (error) {
    return res.redirect("/teacher/login");
  }
};

module.exports = { isAuthenticated };
