const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    Date: String,
    children: [
        {
          type: Schema.Types.ObjectId,
          ref: "Child"
        }
      ]
})

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
