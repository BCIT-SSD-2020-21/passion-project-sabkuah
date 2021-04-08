// =============================================
// REQUIRE
// =============================================
const express = require("express")
const passport = require("passport")
const router = express.Router()
const { registerUser } = require("../controller/users")
// ==============================================
// ROUTES
// ==============================================

router.route("/register").post(registerUser)

module.exports = router
