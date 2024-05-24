import client from "../client.js";

const coach = client.coach;

async function getAllCoachs() {
  // Fetch all coachs
  const coachs = await coach.findMany();
  return coachs;
}
