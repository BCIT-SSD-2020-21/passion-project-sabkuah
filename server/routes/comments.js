// =============================================
// REQUIRE
// =============================================
const express = require("express")
const router = express.Router({ mergeParams: true })
const { requireLogin } = require("../utils/middlewares")

// ==============================================
// ROUTES
// ==============================================

module.exports = router
