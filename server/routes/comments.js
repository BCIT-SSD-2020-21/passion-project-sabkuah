// =============================================
// REQUIRE
// =============================================
const express = require("express")
const { addCommentToPost } = require("../controller/comments")
const router = express.Router({ mergeParams: true })
const { requireLogin } = require("../utils/middlewares")

// ==============================================
// ROUTES
// ==============================================
router.route("/").post(requireLogin, addCommentToPost)

module.exports = router
