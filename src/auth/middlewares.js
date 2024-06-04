import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers?.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }
    const user = jwt.verify(token, "JSON_WEB_TOKEN");

    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const IsAdmin = (req, res, next) => {
  try {
    if ((req.user.role = "ADMIN")) next();
    else res.status(403).json({ message: "unauthorized" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const IsCoach = (req, res, next) => {
  try {
    if ((req.user.role = "COACH")) next();
    else res.status(403).json({ message: "unauthorized" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const IsStudent = (req, res, next) => {
  try {
    if ((req.user.role = "APPRENANT")) next();
    else res.status(403).json({ message: "unauthorized" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default verifyToken;

export { IsAdmin, IsCoach, IsStudent };
