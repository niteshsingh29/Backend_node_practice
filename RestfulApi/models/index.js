const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/students-api", {})
  .then(() => {
    console.log("connection successful");
  })
  .catch((error) => {
    console.log(error.message);
  });

const schema = new mongoose.Schema({
  name: String,
  address: String,
  rollNo: Number,
});

const Model = new mongoose.model("Model", schema);

module.exports = Model;
