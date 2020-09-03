const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // Uid from firebase
  uid: {
    type: String,
    required: true,
    unique: true
  },
  emailID: { type: String, required: true, unique: true },
  displayName: {
    type: String,
    required: true,
    trim: true
  },
  image: { type: String },
  address: {
    city: { 
      type: String, 
      trim: true,
      default: " " 
    },
    state: {
      type: String,
      uppercase: true,
      default: " "
    },
    zip: { 
      type: String, 
      trim: true,
      default: " "  
    },
  },
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: "Child"
    }
  ],
  playdate: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
  ],
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
