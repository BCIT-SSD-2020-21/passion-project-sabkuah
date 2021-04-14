// =============================================
// REQUIRE
// =============================================
const express = require("express")
const {
  addCommentToPost,
  getAllPostComments,
} = require("../controller/comments")
const router = express.Router({ mergeParams: true })
const { requireLogin } = require("../utils/middlewares")

// ==============================================
// ROUTES
// ==============================================
router.route("/").post(requireLogin, addCommentToPost).get(getAllPostComments)

module.exports = router
