import { PrismaClient, Role } from "@prisma/client";

const client = new PrismaClient();

const role = Role;

export default client;

export { role };
