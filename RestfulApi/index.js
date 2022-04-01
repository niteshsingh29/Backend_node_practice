const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
// const port = process.env.port || 8000;
const Model = require("./models/index");
const cors = require('cors')
app.use(cors());
app.use(express.json());

// const staticPath = path.join(__dirname, "./public");
// app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("sending from backend server");
});

app.post("/students", (req, res) => {
  console.log(req.body);
    const studentDocument = new Model(req.body);
    studentDocument
      .save()
      .then(() => {
        res.send(studentDocument);
      })
      .catch((err) => {
        console.error(err);
      });

});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
