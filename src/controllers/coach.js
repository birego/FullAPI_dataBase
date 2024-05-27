import client from "../client.js";

const coach = client.coach;

// Get all coaches
async function getAllCoaches(req, res) {
  try {
    const coaches = await coach.findMany();
    res.json(coaches);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch coaches' });
  }
}

// Get a coach by ID (matricule)
async function getCoachById(req, res) {
  try {
    const { matricule } = req.params;
    const coach = await coach.findUnique({
      where: { matricule: matricule }
    });
    if (coach) {
      res.json(coach);
    } else {
      res.status(404).json({ error: 'Coach not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch coach' });
  }
}

// Create a new coach
async function createCoach(req, res) {
  try {
    const newCoach = await coach.create({
      data: req.body
    });
    res.status(201).json(newCoach);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create coach' });
  }
}

// Update an existing coach by ID (matricule)
async function updateCoach(req, res) {
  try {
    const { matricule } = req.params;
    const updatedCoach = await coach.update({
      where: { matricule: matricule },
      data: req.body
    });
    res.json(updatedCoach);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update coach' });
  }
}

// Delete a coach by ID (matricule)
async function deleteCoach(req, res) {
  try {
    const { matricule } = req.params;
    const deletedCoach = await coach.delete({
      where: { matricule: matricule }
    });
    res.json(deletedCoach);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete coach' });
  }
}

export {
  getAllCoaches,
  getCoachById,
  createCoach,
  updateCoach,
  deleteCoach
};
