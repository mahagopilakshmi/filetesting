//Requiring the modules
var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();
app.use(bodyParser.json());
var db = require("./src/config.js");
var apiRoutes = require("./src/route/api.routes");
//connecting to the database
console.log("Connecting to database");
mongoose.connect(
  db.url,
  { useNewUrlParser: true }
);
mongoose.connection.on("open", function() {
  console.log("Successfully connected to database");
});
mongoose.connection.on("error", function() {
  console.log("Error connecting to database");
});
mongoose.connection.on("disconnected", function() {
  console.log("Disconnected from database");
});
mongoose.connection.on("reconnected", function() {
  console.log("Reconnection established to database");
});
app.use("/api", apiRoutes);
//creating a server to listen on port 8000
const server = http.createServer(app);
server.listen(8000);
console.log("listening on port 8000");
