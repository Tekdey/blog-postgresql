const express = require("express");
const app = express();
const { Client } = require("pg");
const cors = require("cors");
const router = require("./routes/posts.routes");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/posts", router);

module.exports.db = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
}).connect((error) => {
  if (error) {
    throw error;
  }
  console.log("✅ Database connected");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("✅ Serveur running"));
