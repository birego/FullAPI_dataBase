import express from "express";
import { login, register, userProfile, userList } from "./controlers";
const userRoutes = express.Router();

userRoutes.post("/", userList);
userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.get("/:id", userProfile);
