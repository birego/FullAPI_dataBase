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
apprenantRoutes.get("/:id", getApprenantById);
apprenantRoutes.post("/", createApprenant);
apprenantRoutes.put("/", updateApprenant);
apprenantRoutes.delete("/Delete", deleteApprenant);

export default apprenantRoutes;
