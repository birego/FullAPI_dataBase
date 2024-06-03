import express from "express";

import verifyToken, {
  IsAdmin,
  IsCoach,
  IsStudent,
} from "../auth/middlewares.js";

import {
  getAllCoaches,
  getCoachById,
  createCoach,
  updateCoach,
  deleteCoach,
} from "../controllers/coach.js";

const coachRoutes = express.Router();

coachRoutes.get("/", getAllCoaches);
coachRoutes.get("/:matricule", getCoachById);
coachRoutes.post("/", verifyToken, IsAdmin, IsCoach, createCoach);
coachRoutes.put("/:matricule", verifyToken, IsAdmin, IsCoach, updateCoach);
coachRoutes.delete("/:matricule", verifyToken, IsAdmin, IsCoach, deleteCoach);

export default coachRoutes;
