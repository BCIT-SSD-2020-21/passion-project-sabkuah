// =============================================
// REQUIRE
// =============================================
const express = require("express")
const router = express.Router({ mergeParams: true })
const {
  getCommunityPosts,
  createPost,
  editPost,
} = require("../controller/posts")
const { requireLogin } = require("../utils/middlewares")

// ==============================================
// ROUTES
// ==============================================
router.route("/").get(getCommunityPosts).post(requireLogin, createPost)
router.route("/:postId").patch(requireLogin, editPost)

module.exports = router
