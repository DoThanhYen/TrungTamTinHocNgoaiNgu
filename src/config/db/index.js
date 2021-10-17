const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://m001-student:thanhyen2211@cluster0.d5wof.mongodb.net/TTNNTH"
    );
    console.log("Connect Successfully!!");
  } catch (error) {
    console.log("Connect failul!!!", error);
  }
}

module.exports = { connect };
