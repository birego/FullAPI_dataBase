import client from "../client.js";

const coach = client.coach;

// Get all coaches
async function getAllCoachs() {
  const coachs = await coach.findMany();
  return coachs;
}

// Get a coach by ID (matricule)
async function getCoachById(matricule) {
  const coach = await coach.findUnique({
    where: { matricule: matricule }
  });
  return coach;
}

// Create a new coach
async function createCoach(data) {
  const newCoach = await coach.create({
    data: data
  });
  return newCoach;
}

// Update an existing coach by ID (matricule)
async function updateCoach(matricule, data) {
  const updatedCoach = await coach.update({
    where: { matricule: matricule },
    data: data
  });
  return updatedCoach;
}

// Delete a coach by ID (matricule)
async function deleteCoach(matricule) {
  const deletedCoach = await coach.delete({
    where: { matricule: matricule }
  });
  return deletedCoach;
}

// Exporting the functions
export {
  getAllCoachs,
  getCoachById,
  createCoach,
  updateCoach,
  deleteCoach
};
