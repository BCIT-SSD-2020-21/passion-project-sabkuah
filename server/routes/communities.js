// =============================================
// REQUIRE
// =============================================
const express = require("express")
const router = express.Router()
const {
  getAllCommunities,
  getCommunityById,
  createCommunity,
  joinCommunity,
  editCommunity,
} = require("../controller/communities")
const { requireLogin } = require("../utils/middlewares")

// ==============================================
// ROUTES
// ==============================================
router.route("/").get(getAllCommunities).post(requireLogin, createCommunity)
router.route("/:id").get(getCommunityById).patch(requireLogin, editCommunity)
router.route("/:id/join").patch(requireLogin, joinCommunity)

module.exports = router
