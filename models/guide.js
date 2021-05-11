const { Schema, model } = require("mongoose");

const guideSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      reqiured: [true, "Password is required."],
    },
    idType: {
      type: String,
      required: [true, "Type of ID is required."],
    },
    idNumber: {
      type: Number,
      required: [true, "ID number is required."],
      unique: true,
    },
    address: {
      type: String,
      required: [true, "Location is required."],
    },
    licenseType: {
      type: String,
      required: [true, "Location is required."],
    },
    licenseNumber: {
      type: Number,
      required: [true, "License Number is required."],
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: [true, "Phone Number is required."],
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Guide", guideSchema);
