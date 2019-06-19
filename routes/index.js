const express = require("express");
const router = express.Router();

const SessionController = require("./../controllers/session_controller");
const { authRedirect } = require("./../middleware/authorisation_middleware");

const pageRoutes = require("./page_routes");
const userRoutes = require("./user_routes");

router.use("/", pageRoutes);
router.use("/user", userRoutes);

router.get("/login", authRedirect, SessionController.login);
router.post("/login", SessionController.createSession);

module.exports = router;