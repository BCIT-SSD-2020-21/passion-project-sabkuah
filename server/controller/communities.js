// =============================================
// REQUIRE
// =============================================
const User = require("../models/User")
const Community = require("../models/Community")
const catchAsync = require("../utils/catchAsync")

// =============================================
// Logic
// =============================================
/**
 * Retrieve all communities
 * @function
 * @returns {Array} List of communities
 * @throws Will throw an error if no communities found
 */
module.exports.getAllCommunities = catchAsync(async (req, res) => {
  const communities = await Community.find()
    .populate({
      path: "contents",
      populate: {
        path: "author",
      },
      select: "-community",
    })
    .populate({
      path: "members",
      select: "email firstName lastName",
    })
    .populate({
      path: "creator",
      select: "email firstName lastName",
    })

  if (!communities) {
    res.send({ error: "No communities found" })
    return
  }

  res.send({ communities })
})
