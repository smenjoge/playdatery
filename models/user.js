const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const UserSchema = new Schema({
  // Uid from firebase
  uid: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String,
    required: true,
    trim: true
  },
  image: { type: String },
  address: {
    city: { type: String, trim: true },
    state: {
      type: String,
      uppercase: true,
      // required: true,
      enum: statesArray
    },
    zip: { type: String, trim: true },
  },
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: "Child"
    }
  ],
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
