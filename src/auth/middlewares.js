import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const isLogged = req.headers.authorization;
    if (!isLogged) {
      return res
        .status(401)
        .json({ message: "Authorization header is missing" });
    }
    const token = isLogged.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }
    const user = jwt.verify(token, "JESON_WEB_TOKEN");
    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const IsAdmin = () => {
  return (req, res, next) => {
    if ((req.user.role = "ADMIN")) next();
    else res.status(403).json({ message: "unauthorized" });
  };
};

const IsCoach = () => {
  return (req, res, next) => {
    if ((req.user.role = "COACH")) next();
    else res.status(403).json({ message: "unauthorized" });
  };
};

const IsStudent = () => {
  return (req, res, next) => {
    if ((req.user.role = "APPRENANT")) next();
    else res.status(403).json({ message: "unauthorized" });
  };
};

export default verifyToken;

export { IsAdmin, IsCoach, IsStudent };
