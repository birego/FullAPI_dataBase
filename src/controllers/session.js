import client from "../client.js";

const session = client.session;

// Get all sessions
async function getAllSessions(req, res) {
  try {
    const sessions = await session.findMany();
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sessions' });
  }
}

// Get a session by ID
async function getSessionById(req, res) {
  try {
    const { id } = req.params;
    const session = await session.findUnique({
      where: { id: id }
    });
    if (session) {
      res.json(session);
    } else {
      res.status(404).json({ error: 'Session not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch session' });
  }
}

// Create a new session
async function createSession(req, res) {
  const {annee, ville } = req.body;

  // Validation basique
  if (!annee || !ville) {
    return res.status(400).json({ error: 'Tous les champs obligatoires doivent être remplis.' });
  }

  try {
    const newSession = await session.create({
      data: {
        annee,
        ville
      }
    });
    res.status(201).json(newSession);
  } catch (error) {
    if (error.code === 'P2002') { // Code d'erreur pour violation de contrainte unique
      res.status(400).json({ error: 'Le ID est déjà utilisé.' });
    } else {
      res.status(500).json({ error: 'Failed to create session', details: error.message });
    }
  }
}

// Update an existing session by ID
async function updateSession(req, res) {
  try {
    const { id } = req.params;
    const updatedSession = await session.update({
      where: { id: id },
      data: req.body
    });
    res.json(updatedSession);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update session' });
  }
}

// Delete a session by ID
async function deleteSession(req, res) {
  try {
    const { id } = req.params;
    const deletedSession = await session.delete({
      where: { id: id }
    });
    res.json(deletedSession);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete session' });
  }
}

export {
  getAllSessions,
  getSessionById,
  createSession,
  updateSession,
  deleteSession
};
