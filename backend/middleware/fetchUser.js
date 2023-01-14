var jwt = require("jsonwebtoken");
const JWT_secret = "IbadsCode";

const fetchUser = (req, res, next) => {
  //get the user from the jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "User Authentication Failed" });
  }
  try {
    const data = jwt.verify(token, JWT_secret);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "User Authentication Failed" });
  }
};

module.exports = fetchUser;
