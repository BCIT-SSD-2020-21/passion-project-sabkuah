// =============================================
// REQUIRE
// =============================================
const express = require("express")
const router = express.Router({ mergeParams: true })
const { getCommunityPosts } = require("../controller/posts")

// ==============================================
// ROUTES
// ==============================================
router.route("/").get(getCommunityPosts)

module.exports = router
