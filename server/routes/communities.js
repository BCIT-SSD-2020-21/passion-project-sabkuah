// =============================================
// REQUIRE
// =============================================
const express = require("express")
const router = express.Router()
const {
  getAllCommunities,
  getCommunityById,
} = require("../controller/communities")
// ==============================================
// ROUTES
// ==============================================

router.route("/").get(getAllCommunities)
router.route("/:id").get(getCommunityById)

module.exports = router
