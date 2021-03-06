const { Schema, model } = require("mongoose");

const userSchema = new Schema(
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
    nationality: {
        type: String,
        required: [true, "Nationality is required"]
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
