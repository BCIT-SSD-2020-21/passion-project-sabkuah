// =============================================
// REQUIRE
// =============================================
const express = require("express")
const {
  addCommentToPost,
  getAllPostComments,
  deleteComment,
} = require("../controller/comments")
const router = express.Router({ mergeParams: true })
const { requireLogin } = require("../utils/middlewares")

// ==============================================
// ROUTES
// ==============================================
router.route("/").post(requireLogin, addCommentToPost).get(getAllPostComments)

router.route("/:commentId").delete(requireLogin, deleteComment)

module.exports = router
