// =============================================
// REQUIRE
// =============================================
const express = require("express")
const router = express.Router({ mergeParams: true })
const { getCommunityPosts, createPost } = require("../controller/posts")
const { requireLogin } = require("../utils/middlewares")

// ==============================================
// ROUTES
// ==============================================
router.route("/").get(getCommunityPosts).post(requireLogin, createPost)

module.exports = router
