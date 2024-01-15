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
  limits: {
    fileSize: 1024 * 1024 * 50, // 50 MB limit (adjust as needed)
  },
  // cb(null, true);
  // fileFilter: function (req, file, cb) {
  //   // Allow specific file types (e.g., JPEG, PNG, ARW)
  //   const allowedMimeTypes = ["image/jpeg", "image/png"];
  //   if (allowedMimeTypes.includes(file.mimetype)) {
  //     cb(null, true);
  //   } else {
  //     cb(new Error("Invalid file type. Only JPEG, PNG, and ARW are allowed."));
  //   }
  // },
});

const upload = multer({ storage: storage });

// const upload = multer({ dest: "public/uploads" });

const app = express();
// GET home page
router.get("/:fileName", Images.sendImages);

// post image api
router.post("/upload", upload.single("images"), Images.uploadImages); // CRUD is Handled inside Controller

module.exports = router;
