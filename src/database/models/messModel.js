const mongoose = require("mongoose");

const Mess = mongoose.model(
  "Mess",
  new mongoose.Schema(
    {
      mess_id: {
        type: String,
        minlength: 6,
        maxlength: 6,
        unique: true,
        required: true,
      },
      name: {
        type: String,
        trim: true,
      },
      address: {
        country: String,
        street1: String,
        street2: String,
        city: String,
        state: String,
        zip: Number,
      },
      capacity: {
        type: Number,
        max: 15,
      },
      seat: {
        type: Boolean,
        default: true,
      },
      _creator: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      _members: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
    { timestamps: true }
  )
);

module.exports = Mess;
