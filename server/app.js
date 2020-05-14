const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

const multer = require("multer");
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).array("file");

app.get("/", function (req, res) {
  return res.send("Express Server running on port 8000");
});

app.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
      // An error occurred when uploading.
    } else if (err) {
      return res.status(500).json(err);
      // An unknown error occurred when uploading.
    }

    const data = fs.readFileSync(`public/${req.files[0].filename}`, "UTF-8");
    const lines = data.toString().split(/\r?\n/);

    return res.status(200).send({ data: lines });
    // Everything went fine.
  });
});

app.listen(8000, function () {
  console.log("App running on port 8000");
});

module.exports = app;
