const express = require("express");
const authRoute = require("./src/routes/auth.js");
const projectRoute = require("./src/routes/project.js");
const connectToDB = require("./src/utils/config.js");
const PORT = 7777;

// INIT APP
const app = express();
connectToDB();
app.use(express.json());

app.get("/api/check", async (req, res) => {
  res.status(200).json("All work fine");
});

app.use("/api/auth", authRoute);
app.use("/api/project", projectRoute);

// LISTEN TO PORT
app.listen(PORT, () => {
  console.log("Server started on port ", PORT);
});
