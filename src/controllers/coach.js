import client from "../client.js";
import { createUserCoach } from "../auth/views.js";

const coach = client.coach;

// Get all coaches
async function getAllCoaches(req, res) {
  try {
    const coaches = await coach.findMany();
    res.json(coaches);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch coaches" });
  }
}

// Get a coach by ID (matricule)
async function getCoachById(req, res) {
  try {
    const { matricule } = req.params;
    const coach = await coach.findUnique({
      where: { matricule: matricule },
    });
    if (coach) {
      res.json(coach);
    } else {
      res.status(404).json({ error: "Coach not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch coach" });
  }
}

// Create a new coach
async function createCoach(req, res) {
  const {
    codeCohorte,
    nom,
    prenom,
    postnom,
    dateNaissance,
    address,
    email,
    telephone,
    password,
  } = req.body;

  // Validation basique
  if (
    !codeCohorte ||
    !nom ||
    !prenom ||
    !dateNaissance ||
    !address ||
    !email ||
    !telephone
  ) {
    return res
      .status(400)
      .json({ error: "Tous les champs obligatoires doivent être remplis." });
  }

  if (!password) password = "default";

  try {
    const newCoach = await createUserCoach(
      codeCohorte,
      nom,
      prenom,
      postnom,
      dateNaissance,
      address,
      email,
      telephone,
      password
    );
    res.status(201).json(newCoach);
  } catch (error) {
    if (error.code === "P2002") {
      // Code d'erreur pour violation de contrainte unique
      res.status(400).json({ error: "L'email est déjà utilisé." });
    } else {
      res
        .status(500)
        .json({ error: "Failed to create coach", details: error.message });
    }
  }
}

// Update an existing coach by ID (matricule)
async function updateCoach(req, res) {
  try {
    const { matricule } = req.params;
    const updatedCoach = await coach.update({
      where: { matricule: matricule },
      data: req.body,
    });
    res.json(updatedCoach);
  } catch (error) {
    res.status(500).json({ error: "Failed to update coach" });
  }
}

// Delete a coach by ID (matricule)
async function deleteCoach(req, res) {
  try {
    const { matricule } = req.params;
    const deletedCoach = await coach.delete({
      where: { matricule: matricule },
    });
    res.json(deletedCoach);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete coach" });
  }
}

export { getAllCoaches, getCoachById, createCoach, updateCoach, deleteCoach };
