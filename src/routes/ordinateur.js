import { Router } from "express";
import {
   OrdinateurList,
   OdinateurByTag,
   createOrdinateur,
   deleteOrdinateur,
   deleteComputerByTag
} from "../controllers/ordinateur.js";


let ordinateurRoutes = Router();

ordinateurRoutes.get('/', OrdinateurList);
ordinateurRoutes.get('/:tag', OdinateurByTag);
ordinateurRoutes.post('/', createOrdinateur);
// delete all computer
ordinateurRoutes.delete('/', deleteOrdinateur);
// delete computer by id
ordinateurRoutes.delete('/:id', deleteComputerByTag);


export default ordinateurRoutes;
