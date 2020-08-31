const router = require("express").Router();
const userRoutes = require("./users");
const imageRoute = require("./image");

// User routes
router.use("/users", userRoutes);

// Image S3 upload route
router.use("/image", imageRoute);

module.exports = router;