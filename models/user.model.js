const mongoose = require("mongoose");

const Schema = mongoose.Schema; // creating schema instance

const user = new Schema(
  {
    username: {
      // has one filed one
      // some requirments for this field
      type: String,
      required: true,

      trim: true, // trim whitespace
      minlength: 3
    },
    password: {
      type: String,
      required: true,
      unique: true,
      minlength: 3
    }
  },

  {
    timestamps: true // create field when it was created and modifed
  }
);

const User = mongoose.model("user", user);

module.exports = User;
