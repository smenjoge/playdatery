const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  password: {
    type: String,
    required: true,
    unique: true
  },
  email: { type: String, required: true },
  image: { type: String, trim: true },
  phone: { type: String, trim: true },
  address: {
    street: String,
    city: String,
    state: {
      type: String,
      uppercase: true,
      required: true,
      enum: statesArray
    },
    zip: Number,
  },
  child: {
    name: String,
    age: Number,
    image: { type: String, trim: true }
  },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;