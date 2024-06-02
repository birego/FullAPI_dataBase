import { Router } from "express";
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
apprenantRoutes.post("/", createApprenant);
apprenantRoutes.put("/:matricule", updateApprenant);
apprenantRoutes.delete("/:matricule", deleteApprenant);

export default apprenantRoutes;
