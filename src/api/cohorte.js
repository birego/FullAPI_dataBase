import client from "../client.js";

const cohorte = client.cohorte;

async function getAllCohortes() {
  // Fetch all cohorte
  const cohortes = await cohorte.findMany();
  return cohortes;
}

// Enabling CRUD operations for the Cohorte model

export async function createCohorte(req, res) {
  try {
    const newCohorte = await cohorte.create({
      data: req.body,
    });
    res.status(201).json(newCohorte);
  } catch (error) {
    console.error("Erreur lors de creation de la cohorte:", error);
    res.status(500).json({ error: "Erreur de creation tableau cohorte" });
  }
}

/*
req.params.id : C'est ainsi que vous accédez au paramètre id de l'URL 
de la requête dans Express.js. Par exemple, si l'URL de la requête est
 http://localhost:8000/cohortes/1, req.params.id aura la valeur "1". 
 Je crois que c'est une route dynamique d'Express
 */

 export async function updateCohorte(req, res) {
  try {
    const updatedCohorte = await cohorte.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.(updatedCohorte);
  } catch (error) {
    console.error("Erreur lors de mise à jour de la cohorte:", error);
    res.status(500).json({ error: "Erreur de mise à jour tableau cohorte" });
  }
 }

 export async function deleteCohorte(req, res) {
  try {
    const deletedCohorte = await cohorte.delete({
      where: { id: req.params.id },
    });
    res.json(deletedCohorte);
  } catch (error) {
    console.error("Erreur lors de suppression de la cohorte:", error);
    res.status(500).json({ error: "Erreur de suppression tableau cohorte" });
  }
 }