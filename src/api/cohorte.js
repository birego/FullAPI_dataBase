import client from "../client.js";

const cohorte = client.cohorte;

async function getAllCohortes() {
  // Fetch all cohorte
  const cohortes = await cohorte.findMany();
  return cohortes;
}
