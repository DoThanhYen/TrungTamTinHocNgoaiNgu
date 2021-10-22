const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Subject = new Schema(
  {
    name: { type: String },
    description: { type: String },
    certificate: { type: String },
    time: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Subject", Subject);
