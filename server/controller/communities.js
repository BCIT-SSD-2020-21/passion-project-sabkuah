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
    .select("title location description")
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
      select: "title",
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
 * @returns {Object} Success message
 * @throws Will throw an error if Community obj fails validation
 */
module.exports.createCommunity = catchAsync(async (req, res) => {
  const { title, description, location } = req.body
  const user = await req.decodedUser
  const userId = user._id

  // Find User by Id
  const userModel = await User.findById(userId)

  // Create new Community
  const community = new Community({
    title,
    description,
    location,
    contents: [],
    members: [userId],
    creator: userId,
  })

  // Check if new Community is valid
  if (!community) {
    res.send({ error: "Error creating Community" })
    return
  }

  // Push created community in users.community array
  userModel.communities.push(community)

  // Save both models
  await userModel.save()
  await community.save()

  res.send({ message: `Successfully created ${community.title} community` })
})

/**
 * Join a community
 * @function
 * @PATCH
 * @param req.params {String} :id, Community id
 * @returns {Object} Success message
 * @throws Will throw an error if user is already a member of community
 */
module.exports.joinCommunity = catchAsync(async (req, res) => {
  const { id } = req.params
  const user = await req.decodedUser
  const userId = user._id

  // Find User and Communtiy by ID
  const userModel = await User.findById(userId)
  const community = await Community.findById(id)

  //    Check if user is already a member of community
  const memberExists = community.members.indexOf(userId)

  if (memberExists > -1) {
    res.send({
      error: `You're already a member of ${community.title} community`,
    })
    return
  }

  //  $push user in community.members
  await Community.updateOne({ _id: id }, { $push: { members: userId } })
  //  push created community in user.communities
  userModel.communities.push(community)

  // Save  user model
  await userModel.save()

  res.send({ message: `Successfully joined ${community.title} community` })
})

/**
 * Edit title/description/location of community
 * @function
 * @PATCH
 * @param req.body title/description/location
 * @param req.params {String} :id, Community id
 * @returns {Object} Success message
 * @throws Will throw an error if user editing is not the creator of community
 */
module.exports.editCommunity = catchAsync(async (req, res) => {
  const { id } = req.params
  const user = await req.decodedUser
  const userId = user._id

  const community = await Community.findById(id)

  //   Check if user editing is the creator of community
  if (!community.creator._id.equals(userId)) {
    res.send({ error: "You are not authorized to perform this action" })
    return
  }

  await Community.findByIdAndUpdate(id, req.body)

  res.send({ message: `Successfully updated community` })
})
