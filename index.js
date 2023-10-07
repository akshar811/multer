const express = require("express");
const app = express();
const multer = require("multer");
const connect = require("./db");

const store = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: store,
});

app.post("/", upload.single("img"), async (req, res) => {
  await img.create({ img: __dirname + "/" + req.file.path });
  res.send("Upload");
  console.log(__dirname + "/" + req.file.path);
});

app.post("/img", upload.array("img", 2), async (req, res) => {
  console.log(req.files);
  res.send("Upload");
  req.files.map((file) => {
    console.log(file.path);
  });
});

app.listen(8888, () => {
  connect();
  console.log("listening on port 8888");
});
