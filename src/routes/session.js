import express from "express";
import verifyToken, {
  IsAdmin,
  IsCoach,
  IsStudent,
} from "../auth/middlewares.js";
import {
  getAllSessions,
  getSessionById,
  createSession,
  updateSession,
  deleteSession,
} from "../controllers/session.js";

const router = express.Router();

router.get("/", getAllSessions);
router.get("/:id", getSessionById);
router.post("/", verifyToken, IsAdmin, IsCoach, createSession);
router.put("/:id", verifyToken, IsAdmin, IsCoach, updateSession);
router.delete("/:id", verifyToken, IsAdmin, IsCoach, deleteSession);

export default router;
