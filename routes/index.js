var express = require("express");
var router = express.Router();
let Images = require("../Controller/Uploaded");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// const upload = multer({ dest: "public/uploads" });

const app = express();
// GET home page
router.get("/", Images.sendImages);

// post image api
router.post("/upload", upload.single("images"), Images.uploadImages); // CRUD is Handled in Controller

module.exports = router;
