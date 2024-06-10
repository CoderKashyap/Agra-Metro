const express = require("express");
const app = express();
const http = require('http');
const bodyParser = require("body-parser");
const path = require('path');
const connectDatabase = require('./config/database')
const fs = require('fs');

const server = http.createServer(app);

const errorMiddleware = require("./middleware/error");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));





app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
});

app.use(errorMiddleware);

// Config
  require("dotenv").config({ path: "backend/config/config.env" });

// MongoDb connected
  connectDatabase();


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});


server.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});;


// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});

