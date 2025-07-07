const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const mysql = require("mysql2/promise");

const app = express();
const PORT = 3000;

const logDir = "/app/logs";
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
const accessLogStream = fs.createWriteStream(path.join(logDir, "access.log"), { flags: "a" });
app.use(morgan("combined", { stream: accessLogStream }));

app.use(express.static(path.join(__dirname, "frontend")));

let db = null;

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Check if ivolve DB exists
async function checkIvolveDBExists(connection) {
  const [rows] = await connection.query("SHOW DATABASES LIKE 'ivolve'");
  return rows.length > 0;
}

async function connectToDatabaseWithRetry() {
  let connected = false;

  while (!connected) {
    try {
      console.log("🔄 Attempting to connect to MySQL...");

      // Connect without specifying database
      const rootConn = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      });

      const dbExists = await checkIvolveDBExists(rootConn);

      if (!dbExists) {
        console.error("❌ 'ivolve' database not found. Retrying in 5 seconds...");
        await wait(5000);
        continue;
      }

      // Now connect to the actual ivolve database
      db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: "ivolve",
      });

      connected = true;
      console.log("✅ Connected to MySQL and 'ivolve' DB found.");
    } catch (err) {
      console.error("❌ Connection error:", err.message);
      console.log("🔁 Retrying in 5 seconds...");
      await wait(5000);
    }
  }
}

(async () => {
  await connectToDatabaseWithRetry();

  app.listen(PORT, () => {
    console.log(`🚀 Server started on http://localhost:${PORT}`);
  });
})();

