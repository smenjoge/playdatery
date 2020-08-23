const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
    firstName:
    {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      trim: true
    },
    activities: {
        type: String,
        trim: true
      },
    image: { type: String }
});

const Child = mongoose.model("Child", ChildSchema);

module.exports = Child;
