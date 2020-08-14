const router = require("express").Router();
const userController = require("../../controllers/userController");

// // Matches with "/api/users/find/:user"
// router.route("/find/:bookName")
//   .get(booksController.search)

// Matches with "/api/users"
router.route("/")
//   .get(booksController.findAll)
  .post(userController.create);

// // Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .delete(booksController.remove);

module.exports = router;
