import client from "../client.js";

const apprenant = client.apprenant;

async function getAllApprenants() {
  // Fetch all student
  const apprenants = await apprenant.findMany();
  return apprenants;
}
