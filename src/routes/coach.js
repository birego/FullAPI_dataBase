import express from 'express';
import { getAllCoaches, getCoachById, createCoach, updateCoach, deleteCoach } from '../controllers/coach.js';

const coachRoutes = express.Router();

coachRoutes.get('/', getAllCoaches);
coachRoutes.get('/:matricule', getCoachById);
coachRoutes.post('/', createCoach);
coachRoutes.put('/:matricule', updateCoach);
coachRoutes.delete('/:matricule', deleteCoach);

export default coachRoutes;
