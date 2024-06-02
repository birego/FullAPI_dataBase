import client from "../client.js";
import session from "./session.js";

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
    const { code, description, sessionId } = req.body;
    const findSessionId = session.findUnique({
      where: {
        id: sessionId,
      },
    });
    if (findSessionId == null) {
      res.status(403).json({ message: "session id must be valid" });
      return;
    }
    const createdCohorte = await cohorte.create({
      data: { code, description, sessionId },
    });
    res.json(createdCohorte);
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
}

//

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
