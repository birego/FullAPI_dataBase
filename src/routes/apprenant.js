import { Router } from "express";
import verifyToken, {
  IsAdmin,
  IsCoach,
  IsStudent,
} from "../auth/middlewares.js";
import {
  getAllApprenants,
  getApprenantById,
  createApprenant,
  updateApprenant,
  deleteApprenant,
} from "../controllers/apprenant.js";

let apprenantRoutes = Router();

apprenantRoutes.get("/", getAllApprenants);
apprenantRoutes.get("/:matricule", getApprenantById);
apprenantRoutes.post("/", verifyToken, IsAdmin, IsCoach, createApprenant);
apprenantRoutes.put(
  "/:matricule",
  verifyToken,
  IsAdmin,
  IsCoach,
  updateApprenant
);
apprenantRoutes.delete(
  "/:matricule",
  verifyToken,
  IsAdmin,
  IsCoach,
  deleteApprenant
);

export default apprenantRoutes;
