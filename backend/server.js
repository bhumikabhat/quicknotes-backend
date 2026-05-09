const express = require("express");
const cors = require("cors");
require("dotenv").config();

const notesRoutes = require("./routes/notes");

const app = express();

app.use(
  cors({
    origin: "https://quicknotes-frontend-zeta.vercel.app",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", notesRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running...");
});