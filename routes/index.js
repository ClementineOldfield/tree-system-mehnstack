const express = require("express");
const router = express.Router();

const pageRoutes = require("page_routes");
const userRoutes = require("user_routes");

router.use("/", pageRoutes);
router.user("/user", userRoutes);

module.exports = router;