const express = require("express");
const router = express.Router();
const PageController = require("../controllers/page_controller");
const { authRedirect, authorise } = require("./../middleware/authorisation_middleware");

router.get("/", PageController.index);
router.get("/dashboard", authorise, PageController.dashboard);

module.exports = router;