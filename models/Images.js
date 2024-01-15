const mongoose = require("mongoose");

const rawImageSchema = new mongoose.Schema({
  images: {
    type: String,
    required: true,
  },
  exifImage: {
    type: mongoose.Schema.Types.Mixed,
    required: false, // Set to false if it's optional
  },
});

const RawImage = mongoose.model("RawImage", rawImageSchema);

module.exports = RawImage;
