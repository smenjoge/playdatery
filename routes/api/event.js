const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// Matches with "/api/events"
router.route("/")
  .post(eventController.create) // Save a new user to the database
  .get(eventController.findEvent) // Get event details 
//   .put(eventController.updateEvent) // Update event details

module.exports = router;