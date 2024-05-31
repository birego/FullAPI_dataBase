import express from "express";
import jwt from "jsonwebtoken";
import client from "../client.js";
import getUsers, {
  createAdminUser,
  VerifyUser,
  getSingleUser,
} from "./views.js";

const userRoutes = express.Router();

// CREDENTIAL MANAGEMENT
async function register(req, res) {
  const { email, username, password } = req.body;
  createAdminUser(username, email, password)
    .catch((e) => {
      res.status(500).json({ error: e.message });
    })
    .finally(async () => {
      await client.$disconnect();
      res.status(200).json({ message: "Sign up successfully" });
    });
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Username and password required" });
    }
    const user = await VerifyUser(email, password);

    if (user) {
      const token = jwt.sign(
        { username: user.email, role: user.role },
        "JSON_WEB_TOKEN",
        { expiresIn: "24h" }
      );
      res.status(200).json({ message: "User logged in successfuly", token });
    } else res.status(403).json({ message: "Bad credential" });
  } catch (error) {
    res.status(500).json({ error: error?.stack });
  }
}

// USER MANAGEMENT
async function userList(req, res) {
  try {
    const users = await getUsers();

    if (users) res.status(200).json({ users: users });
    else res.status(404).json({ message: "No user found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function userProfile(req, res) {
  let { userId } = req.params;
  try {
    let user = await getSingleUser(userId);

    if (user) res.status(200).json({ user: user });
    else res.status(404).json({ message: "This user doesn't exist`" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

process.on("SIGINT", async () => {
  await client.$disconnect();
  process.exit(0);
});
process.on("SIGTERM", async () => {
  await client.$disconnect();
  process.exit(0);
});

export { register, login, userList, userProfile };
