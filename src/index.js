import express from "express";
import apprenantRoutes from "./routes/apprenant.js";
import coachRoutes from "./routes/coach.js";
import cohorteRoutes from "./routes/cohorte.js";
import sessionRoutes from "./routes/session.js";
import ordinateurRoutes from "./routes/ordinateur.js";

const app = express();
app.use(express.json());

app.use("/apprenants", apprenantRoutes);
app.use("/coaches", coachRoutes);
app.use("/machines", ordinateurRoutes);
app.use("/sessions", sessionRoutes);
app.use("/cohortes", cohorteRoutes);

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(8000, function () {
  console.log(`server running at http://localhost:8000`);
});
