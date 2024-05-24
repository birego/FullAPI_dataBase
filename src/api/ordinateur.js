import client from "../client.js";

const ordinateur = client.ordinateur;

async function getAllOrdinateurs() {
  // Fetch all cohorte
  const ordinateurs = await ordinateur.findMany();
  return ordinateurs;
}
