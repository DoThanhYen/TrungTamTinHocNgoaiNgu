const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
  {
    class: { type: String },
    name: { type: String },
    description: { type: String },
    certificate: { type: String },
    fee: { type: Number },
    datestart: { type: Date },
    schedule: { type: String },
    address: { type: String },
    students: [
      {
        student_id: { type: ObjectId },
        fullname: { type: String },
        phone: { type: String },
        dateofbirth: { type: Date },
        gender: { type: String },
        pay_money: { type: Boolean, default: false },
        notification: { type: Boolean, default: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Course", Course);
