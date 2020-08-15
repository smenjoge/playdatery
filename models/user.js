const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  emailID: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: { type: String }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
