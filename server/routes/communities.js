// =============================================
// REQUIRE
// =============================================
const express = require("express")
const router = express.Router()
const {
  getAllCommunities,
  getCommunityById,
  createCommunity,
} = require("../controller/communities")
const { requireLogin } = require("../utils/middlewares")
// ==============================================
// ROUTES
// ==============================================

router.route("/").get(getAllCommunities).post(requireLogin, createCommunity)
router.route("/:id").get(getCommunityById)

module.exports = router
