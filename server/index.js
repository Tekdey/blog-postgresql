const express = require("express");
const app = express();
const { Client } = require("pg");
const cors = require("cors");
require("dotenv").config();

app.use(cors());

const db = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

db.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("✅ Database connected");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("✅ Serveur running"));
