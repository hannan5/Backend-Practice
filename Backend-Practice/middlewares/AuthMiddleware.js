const jwt = require("jsonwebtoken");
const User = require("../Schema/UserSchema");

exports.GenerateToken = async (id) => {
  return jwt.sign(id.toString(), "qweasdxcv123qpoilkjmnb456789");
};

exports.AuthenticateToken = async (req, res, next) => {
  try {
    const authheader = req.headers["authorization"];
    const token = authheader && authheader.split(" ")[1];
    if (token == null) {
      return next(res.json({ message: "No Credentials sent!" }));
    }
    const decoded = jwt.verify(token, "qweasdxcv123qpoilkjmnb456789");
    const user = await User.findById(decoded);
    if (!user) {
      return next(res.json({ message: "User is not Authorized" }));
    }
    if (user._id == req.query.id) {
      return next();
    } else {
      return next(res.json({ message: "User is not Authorized" }));
    }
  } catch (error) {
    return next(res.json({ message: "Sercer Error" }));
  }
};
