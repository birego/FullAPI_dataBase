import client from "../client.js";
import { createUserStudent } from "../auth/views.js";

const apprenant = client.apprenant;

// Get all apprenants
async function getAllApprenants(req, res) {
  try {
    const apprenants = await apprenant.findMany();
    res.json(apprenants);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch apprenants" });
  }
}

// Get an apprenant by ID (matricule)
async function getApprenantById(req, res) {
  try {
    const { matricule } = req.params;
    const apprenant = await apprenant.findUnique({
      where: { matricule: matricule },
    });
    if (apprenant) {
      res.json(apprenant);
    } else {
      res.status(404).json({ error: "Apprenant not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch apprenant" });
  }
}

// Create a new apprenant
async function createApprenant(req, res) {
  const {
    nom,
    prenom,
    postnom,
    dateNaissance,
    lieuNaissance,
    codeCohorte,
    tagOrdinateur,
    email,
    password,
  } = req.body;

  // Validation basique
  if (!nom || !prenom || !dateNaissance || !lieuNaissance || !email) {
    return res
      .status(400)
      .json({ error: "Tous les champs obligatoires doivent être remplis." });
  }
  if (!password) password = "default";

  try {
    const newApprenant = await createUserStudent(
      nom,
      prenom,
      postnom,
      dateNaissance,
      lieuNaissance,
      codeCohorte,
      tagOrdinateur,
      email,
      password
    );
    res.status(201).json(newApprenant);
  } catch (error) {
    if (error.code === "P2002") {
      // Code d'erreur pour violation de contrainte unique
      res.status(400).json({ error: "L'email est déjà utilisé." });
    } else {
      res
        .status(500)
        .json({ error: "Failed to create apprenant", details: error.message });
    }
  }
}

// Update an existing apprenant by ID (matricule)
async function updateApprenant(req, res) {
  try {
    const { matricule } = req.params;
    const updatedApprenant = await apprenant.update({
      where: { matricule: matricule },
      data: req.body,
    });
    res.json(updatedApprenant);
  } catch (error) {
    res.status(500).json({ error: "Failed to update apprenant" });
  }
}

// Delete an apprenant by ID (matricule)
async function deleteApprenant(req, res) {
  try {
    const { matricule } = req.params;
    const deletedApprenant = await apprenant.delete({
      where: { matricule: matricule },
    });
    res.json(deletedApprenant);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete apprenant" });
  }
}

export {
  getAllApprenants,
  getApprenantById,
  createApprenant,
  updateApprenant,
  deleteApprenant,
};
