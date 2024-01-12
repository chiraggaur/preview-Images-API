// CRUD Operation on uploaded Imgages Handled Here
let RawImage = require("../models/Images");

let uploadedImage = {
  // sendImages will Send All Images on Get Request
  sendImages: async (req, res, next) => {
    try {
      let data = await RawImage.find({});
      console.log(data);
      res.status(200).json(data);
    } catch (err) {
      res.status(404).send("error", err);
    }
    // res.send("checking get Images page");
  },
  // Insert Data/Image on user Upload
  uploadImages: async (req, res, next) => {
    try {
      // // Get the uploaded file path
      const images = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
      }`;
      await RawImage.create({ images: images });
      console.log("Image Uploaded successfully");
      res.redirect("/");
    } catch (err) {
      res.status(500).send("Error while uploading", err);
    }
    console.log(req.file);
    // res.send("checking Image upload");
    // console.log(req.file); pending to set image link for db
  },
};

module.exports = uploadedImage;
