import exp from "constants";
import client from "../client.js";


const ordinateur = client.ordinateur;

// Get all ordinateur

export async function OrdinateurList(req, res) {
  try {
    const allComputer = await ordinateur.findMany();
    res.json(allComputer);
  } catch (e) {
    res.status(500).json({ message: e.stack });
  }
}

// get ordinateur by Id

export async function OdinateurByTag(req, res) {
  try {
    const { tag } = req.params;
    const allComputer = await ordinateur.findMany();
    const uComputer = allComputer.filter(c => c.tag == tag);
    if (!uComputer) {
      res.status(404).json({ message: 'id not found'});
    } else {
      res.json({ uComputer });
    }
  } catch (err) {
    res.status(500).json({ message: err.stack });
  }
}

// create ordinateur
export async function createOrdinateur(req, res) {
  try {
    const { tag, modele, fabricant } = req.body;
    const newComputer = await ordinateur.create({
      data: {
        tag,
        modele,
        fabricant
      }
    });
    res.status(200).json(newComputer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create ordinateur' });
  }
}

export async function deleteOrdinateur(req, res) {
  try {
    res.status(500).json({ message: 'delete ordinateur' });
  } catch (er) {
    res.status()
  }
}

export async function deleteComputerByTag (req, res) {
  try {
    const { tag } = req.body;
    const allComputer = await ordinateur.findMany();
    const deletedComputer = await ordinateur.delete({
      where: { tag: tag }
    });
    console.log(deletedComputer);
    res.status(200).json(allComputer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete ordinateur' });
  }
}