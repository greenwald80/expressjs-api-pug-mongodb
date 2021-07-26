const express = require("express");
const bodyParser = require("body-parser");
// Include mongoose in the server file
const mongoose = require("mongoose");
const app = express();
// Tell the server file about the .env file
require("dotenv").config();

// Set up pug as view engine
app.set("view engine", "pug");

// Add the bodyParser middelware to the express application
app.use(bodyParser.urlencoded({ extended: false }));

// Specify the url prefix and import routes
app.use("/", require("./routes"));

// Use the MONGO_URI from .env or use local mongodb
const db =
  process.env.MONGO_URI || "mongodb://localhost:27017/express-tutorial";
// Connect the Express application to MongoDB
mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    else {
      console.log("Connected successfully to DB");
    }
  }
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
