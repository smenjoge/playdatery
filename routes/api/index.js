const router = require("express").Router();
const userRoutes = require("./users");
const imageRoute = require("./image");
const eventRoute = require("./event");

// User routes
router.use("/users", userRoutes);

// Image S3 upload route
router.use("/image", imageRoute);

// Event routes
router.use("/events", eventRoute);

module.exports = router;