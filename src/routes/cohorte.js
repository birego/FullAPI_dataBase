import express from "express";
import {
  CohorteList,
  CreateCohorte,
  UpdateCohorte,
  DeleteCohorte,
} from "../controllers/cohorte.js";

const router = express.Router();

router.get("/", CohorteList);
router.post("/", CreateCohorte);
router.put("/:id", UpdateCohorte);
router.delete("/:id", DeleteCohorte);

export default router;
