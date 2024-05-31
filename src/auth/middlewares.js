import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, "JESON_WEB_TOKEN");
    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const IsAdmin = () => {
  return (req, res, next) => {
    if (req.user.roles.include("ADMIN")) next();
    else res.status(403).json({ message: "unauthorized" });
  };
};

const IsCoach = () => {
  return (req, res, next) => {
    if (req.user.roles.include("COACH")) next();
    else res.status(403).json({ message: "unauthorized" });
  };
};

const IsStudent = () => {
  return (req, res, next) => {
    if (req.user.roles.include("APPRENANT")) next();
    else res.status(403).json({ message: "unauthorized" });
  };
};

export default verifyToken;

export { IsAdmin, IsCoach, IsStudent };
