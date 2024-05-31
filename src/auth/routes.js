import { Router } from "express";
import { login, register, userProfile, userList } from "./controlers.js";
const userRoutes = Router();

userRoutes.post("/", userList);
userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.get("/:id", userProfile);

export default userRoutes;
