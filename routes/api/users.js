const router = require("express").Router();
const userController = require("../../controllers/userController");

// // Matches with "/api/users/:userId"
router.route("/:userId")
  .get(userController.findOne) // Get User info to display on Profile Page
  .put(userController.updateUser) // Update user info

// Matches with "/api/users/:userId/child"
router
  .route("/:userId/child")
  .post(userController.addChild) // Add child to user document
  .delete(userController.removeChild) // remove child from user document
  .put(userController.updateChild) // Update child document

// Matches with "/api/users"
router.route("/")
  .post(userController.create) // Save a new user to the database

module.exports = router;
