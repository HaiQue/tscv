require("dotenv").config();
const express = require("express");
const cors = require("cors");
const emailRouter = require("./api/send-email");

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Use the email router
app.use("/api", emailRouter);

// Define the port
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
