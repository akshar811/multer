const mongoose = require("mongoose");

let imgschema = new mongoose.Schema({
  img: String,
});

const img = mongoose.model("img", imgschema);

module.exports = img;
