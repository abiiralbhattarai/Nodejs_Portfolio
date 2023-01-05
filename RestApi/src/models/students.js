const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minimumlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//securing the password

studentSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});
//creating new collection

const Students = new mongoose.model("StudentData", studentSchema);

module.exports = Students;
