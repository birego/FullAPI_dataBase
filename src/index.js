import express from "express";
import cors from "cors";
import apprenantRoutes from "./routes/apprenant.js";
import coachRoutes from "./routes/coach.js";
import cohorteRoutes from "./routes/cohorte.js";
import sessionRoutes from "./routes/session.js";
import ordinateurRoutes from "./routes/ordinateur.js";
import userRoutes from "./auth/routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/apprenants", apprenantRoutes);
app.use("/coaches", coachRoutes);
app.use("/machines", ordinateurRoutes);
app.use("/sessions", sessionRoutes);
app.use("/cohortes", cohorteRoutes);
app.use("/user", userRoutes);

app.get("/", function (req, res) {
  res.send({ message: "server live" });
});

app.use("*", function (req, res) {
  res.json({ message: "not found" });
});

app.listen(8000, function () {
  console.log(`server running at http://localhost:8000`);
});
