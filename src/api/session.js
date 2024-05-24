import client from "../client.js";

const session = client.session;

async function getAllSessions() {
  // Fetch all sessions
  const sessions = await session.findMany();
  return sessions;
}
