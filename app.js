const express = require("express");
const authRoute = require("./src/routes/auth.js");
const connectToDB = require("./src/utils/config.js");
const PORT = 7777;

// INIT APP
const app = express();
app.use(express.json());

// CONNECT TO DB
connectToDB();

app.use("/api/auth", authRoute);

// LISTEN TO PORT
app.listen(PORT, () => {
  console.log("Server started on port ", PORT);
});
