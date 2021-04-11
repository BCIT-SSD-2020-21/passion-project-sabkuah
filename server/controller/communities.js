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

/**
 * Create a community
 * @function
 * @POST
 * @param req.body {Object} title, description, location
 * @returns {Object} Community obj
 * @throws Will throw an error if Community obj fails validation
 */
module.exports.createCommunity = catchAsync(async (req, res) => {
  const { title, description, location } = req.body
  const user = await req.decodedUser
  const userId = user._id

  const community = new Community({
    title,
    description,
    location,
    contents: [],
    members: [userId],
    creator: userId,
  })

  if (!community) {
    res.send({ error: "Error creating Community" })
    return
  }

  await community.save()
  res.send({ message: `Successfully created ${community.title} community` })
})
