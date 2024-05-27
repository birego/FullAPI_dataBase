import client from "../client.js";

const cohorte = client.cohorte;

async function CohorteList(req, res) {
  try {
    const cohortes = await cohorte.findMany();
    res.json(cohortes);
  } catch (error) {
    console.error("Error fetching cohortes:", error);
    res.status(500).json({ error: "Failed to fetch cohortes" });
  }
}

async function CreateCohorte(req, res) {
  try {
    const newCohorte = await cohorte.create({
      data: req.body,
    });
    res.status(201).json(newCohorte);
  } catch (error) {
    console.error("Error creating cohorte:", error);
    res.status(500).json({ error: "Failed to create cohorte" });
  }
}

async function UpdateCohorte(req, res) {
  try {
    const updatedCohorte = await cohorte.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(updatedCohorte);
  } catch (error) {
    console.error("Error updating cohorte:", error);
    res.status(500).json({ error: "Failed to update cohorte" });
  }
}

async function DeleteCohorte(req, res) {
  try {
    const deletedCohorte = await cohorte.delete({
      where: { id: req.params.id },
    });
    res.json(deletedCohorte);
  } catch (error) {
    console.error("Error deleting cohorte:", error);
    res.status(500).json({ error: "Failed to delete cohorte" });
  }
}

export { CohorteList, CreateCohorte, UpdateCohorte, DeleteCohorte };
