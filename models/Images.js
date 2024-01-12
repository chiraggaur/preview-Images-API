const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema(
  {
    images: { type: String, required: true },
  },
  { timestamps: true }
);

let RawImage = mongoose.model("RawImage", imageSchema);

module.exports = RawImage;
