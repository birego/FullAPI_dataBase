import client, { role } from "../client.js";
import bcrypt from "bcrypt";

let userTable = client.user;

async function getUsers() {
  // Fetch all users
  const allUsers = await userTable.findMany();
  return allUsers;
}

async function getSingleUser(userId) {
  try {
    const user = await userTable.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  } catch (error) {
    throw new Error(`Error fetching user: ${error}`);
  } finally {
    await client.$disconnect();
  }
}

async function VerifyUser(email, password) {
  try {
    const user = await userTable.findUnique({
      where: {
        email: email,
      },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(`Error fetching user: ${error}`);
  } finally {
    await client.$disconnect();
  }
}

async function createAdminUser(username, email, password) {
  const cryptPassword = await bcrypt.hash(password, 10);
  // Create a new user
  const newUser = await userTable.create({
    data: {
      username: username,
      email: email,
      password: cryptPassword,
      role: role.ADMIN,
    },
  });
  return newUser;
}

async function createStudent(
  nom,
  prenom,
  postnom,
  dateNaissance,
  lieuNaissance,
  codeCohorte,
  tagOrdinateur,
  email,
  password
) {
  const username = nom + " " + prenom;
  const cryptPassword = await bcrypt.hash(password, 10);
  const studentUser = await userTable.create({
    data: {
      username: username,
      email: email,
      password: cryptPassword,
      role: role.STUDENT,
      apprenant: {
        create: {
          nom,
          prenom,
          postnom,
          dateNaissance,
          lieuNaissance,
          codeCohorte,
          tagOrdinateur,
        },
      },
    },
    include: {
      apprenant: true,
    },
  });

  return studentUser;
}

async function createCoach(
  nom,
  prenom,
  postnom,
  dateNaissance,
  lieuNaissance,
  codeCohorte,
  tagOrdinateur,
  email,
  password
) {
  const username = nom + " " + prenom;
  const cryptPassword = await bcrypt.hash(password, 10);
  const studentUser = await userTable.create({
    data: {
      username: username,
      email: email,
      password: cryptPassword,
      role: role.STUDENT,
      apprenant: {
        create: {
          nom,
          prenom,
          postnom,
          dateNaissance,
          lieuNaissance,
          codeCohorte,
          tagOrdinateur,
        },
      },
    },
    include: {
      apprenant: true,
    },
  });

  return studentUser;
}

export default getUsers;
export { createAdminUser, getSingleUser, VerifyUser, createStudent };
