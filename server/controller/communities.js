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
 * @GET
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

/**
 * Retrieve community by ID
 * @function
 * @GET
 * @param req.params {String} :id, Community id
 * @returns {Object} Community obj
 * @throws Will throw an error if no community found
 */
module.exports.getCommunityById = catchAsync(async (req, res) => {
  const { id } = req.params

  const community = await Community.findById(id)
    .populate({
      path: "contents",
      select: "-community",
      populate: {
        path: "author",
        select: "firstName lastName email",
      },
    })
    .populate({
      path: "members",
      select: "email firstName lastName",
    })
    .populate({
      path: "creator",
      select: "email firstName lastName",
    })

  if (!community) {
    res.send({ error: "No community found" })
    return
  }

  res.send({ community })
})
