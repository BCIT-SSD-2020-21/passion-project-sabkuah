// =============================================
// REQUIRE
// =============================================
const User = require("../models/User")
const Community = require("../models/Community")
const Post = require("../models/Post")

/**
 * Retrieve all posts in a community
 * @function
 * @GET
 * @param req.params :id - community id
 * @returns {Array} List of posts in a community
 * @throws Will throw an error if community not found
 */
module.exports.getCommunityPosts = async (req, res) => {
  try {
    const { id } = req.params
    const community = await Community.findById(id)

    const posts = await Post.find({ community: community._id })
      .select("-community")
      .populate({
        path: "author",
        select: "firstName lastName email location",
      })

    res.send({ posts })
  } catch (e) {
    console.log(e)
  }
}
