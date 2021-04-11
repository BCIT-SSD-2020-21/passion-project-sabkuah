// =============================================
// REQUIRE
// =============================================
const express = require("express")
const router = express.Router()

// ==============================================
// ROUTES
// ==============================================

router.route("/").get((req, res) => {
  res.send({ message: "communities" })
})

module.exports = router
