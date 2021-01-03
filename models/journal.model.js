const mongoose = require("mongoose");

const Schema = mongoose.Schema; // creating schema instance

const journal = new Schema(
  {
    title: {
      // has one filed one
      // some requirments for this field
      type: String,
      required: true,
      unique: true,
      trim: true, // trim whitespace
      minlength: 1
    },
    description: { type: String, required: true },
    date: { type: Date, required: true }
  },

  {
    timestamps: true // create field when it was created and modifed
  }
);

const Journal = mongoose.model("Journal", journal);

module.exports = Journal;
