const express = require("express");
const router = express.Router();

const { celebrate, Joi } = require("celebrate");
const passport = require("./../config/passport");

const SessionController = require("./../controllers/session_controller");
const { authRedirect } = require("./../middleware/authorisation_middleware");

const pageRoutes = require("./page_routes");
const userRoutes = require("./user_routes");

router.use("/", pageRoutes);
router.use("/user", userRoutes);

router.get("/login", authRedirect, SessionController.login);

router.post("/login", celebrate({
  body: {
    email: Joi.string().required(),
    password: Joi.string().required()
  }
}), passport.authenticate("local", {
  successRedirect: "/dashboard",
  failureRedirect: "/login",
  failureFlash: true
}));

router.get("/logout", SessionController.logout);

module.exports = router;