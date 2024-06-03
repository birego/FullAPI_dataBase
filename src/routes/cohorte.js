import express from "express";
import verifyToken, {
  IsAdmin,
  IsCoach,
  IsStudent,
} from "../auth/middlewares.js";
import {
  CohorteList,
  CreateCohorte,
  UpdateCohorte,
  DeleteCohorte,
} from "../controllers/cohorte.js";

const router = express.Router();

router.get("/", CohorteList);
router.post("/", verifyToken, IsAdmin, IsCoach, CreateCohorte);
router.put("/:id", verifyToken, IsAdmin, IsCoach, UpdateCohorte);
router.delete("/:id", verifyToken, IsAdmin, IsCoach, DeleteCohorte);

export default router;
