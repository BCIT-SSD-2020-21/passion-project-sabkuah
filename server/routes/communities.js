// =============================================
// REQUIRE
// =============================================
const express = require("express")
const router = express.Router()
const { getAllCommunities } = require("../controller/communities")
// ==============================================
// ROUTES
// ==============================================

router.route("/").get(getAllCommunities)

module.exports = router
