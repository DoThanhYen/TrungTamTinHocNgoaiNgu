const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
  {
    subject_id: { type: String },
    class: { type: String },
    subject_name: { type: String },
    subject_description: { type: String },
    subject_certificate: { type: String },
    fee: { type: Number },
    datestart: { type: Date },
    schedule: { type: String },
    address: { type: String },
    students: [
      {
        student_id: { type: ObjectId },
        fullname: {
          type: String,
        },
        phone: {
          type: String,
        },
        dateofbirth: { type: Date },
        gender: { type: String },
        email: { type: String },
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
