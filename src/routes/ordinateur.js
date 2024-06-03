import { Router } from "express";
import verifyToken, {
  IsAdmin,
  IsCoach,
  IsStudent,
} from "../auth/middlewares.js";
import {
  OrdinateurList,
  OdinateurByTag,
  createOrdinateur,
  deleteOrdinateur,
  deleteComputerByTag,
} from "../controllers/ordinateur.js";

let ordinateurRoutes = Router();

ordinateurRoutes.get("/", OrdinateurList);
ordinateurRoutes.get("/:tag", OdinateurByTag);
ordinateurRoutes.post("/", verifyToken, IsAdmin, IsCoach, createOrdinateur);
ordinateurRoutes.delete("/", verifyToken, IsAdmin, IsCoach, deleteOrdinateur);
ordinateurRoutes.delete(
  "/:tag",
  verifyToken,
  IsAdmin,
  IsCoach,
  deleteComputerByTag
);

export default ordinateurRoutes;
