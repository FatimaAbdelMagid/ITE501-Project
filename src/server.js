require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const path = require("path");


const { requireApiKey } = require("./middleware/auth");
const studentRoutes = require("./routes/students");
const employeeRoutes = require("./routes/employees");

const app = express();
// Serve frontend
app.use(express.static(path.join(__dirname, "..", "public")));



app.use(express.json({ limit: "1mb" }));
app.use(morgan("combined"));

app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Require API key for API routes
app.use("/api", requireApiKey);
app.use("/api/students", studentRoutes);
app.use("/api/employees", employeeRoutes);

// 404 handler
app.use((req, res) => res.status(404).json({ error: "Not Found" }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`ITE501 Starter API running on port ${port}`);
});
