const router = require("express").Router();
const eventController = require("../../controllers/eventController");

router.route("/:eventId")
  .get(eventController.getEventInfo) // Get All events for the user details 

// Matches with "/api/events"
router.route("/")
  .post(eventController.create) // Save a new user to the database

module.exports = router;