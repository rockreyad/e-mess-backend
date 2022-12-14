const mongoose = require("mongoose");

const Deposit = mongoose.model(
  "Deposit",
  new mongoose.Schema(
    {
      date: {
        type: String,
        required: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      sheet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sheet",
      },
      category: {
        type: String,
        required: true,
        default: "other",
      },
      amount: {
        type: Number,
        min: 1,
        max: [20000, "Amount can't more than 20000"],
        required: true,
        trim: true,
      },
      desc: {
        type: String,
      },
      status: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  )
);

module.exports = Deposit;
