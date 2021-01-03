// imported in dependecy
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // can have env variables in file

const app = express();
const port = process.env.port || 5000;

app.use(cors()); // connecting expres to cors
app.use(express.json()); // used to reconginze incoming files as json object

const uri = process.env.ATLAS_URI; // establishing connection from env file
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection; // .connection --> containing information about system's connection
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const journalRouter = require("./routes/journal");
const userRouter = require("./routes/user");

app.use("/journal", journalRouter); // when user enters this call the matching router
app.use("/users", userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/build"));
}

app.listen(port, () => {
  console.log("Connection made on port " + port);
});
