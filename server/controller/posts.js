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
        select: "firstName lastName email location avatar",
      })

    res.send({ posts })
  } catch (e) {
    console.log(e)
  }
}

/**
 * Add a post to a community
 * @function
 * @POST
 * @param req.params :id - community id
 * @param req.body title, description, category
 * @returns {Object} Success message
 * @throws Will throw an error if community not found
 * @throws Will throw an error if new Post fails validation
 */
module.exports.createPost = async (req, res) => {
  try {
    const { id } = req.params
    const { title, description, category, image } = req.body
    const user = await req.decodedUser
    const userId = user._id

    // Find Community
    const community = await Community.findById(id)

    // Check if user logged in is a member of selected community
    const memberExists = community.members.indexOf(userId)

    if (memberExists == -1 || memberExists < -1) {
      res.send({
        error: `You are not a member of this community`,
      })
      return
    }

    // Create new Post
    const post = new Post({
      title,
      description,
      date: new Date(),
      category,
      image: image ? image : "",
      community: community._id,
      author: userId,
    })

    // Save Post
    await post.save()

    // Push post in community.contents array, then save
    community.contents.push(post)
    await community.save()

    res.send({ message: `Succesfully created new post!` })
  } catch (e) {
    console.log(e)
    res.send({ error: e.message })
  }
}

/**
 * Edit a post
 * @function
 * @PATCH
 * @param req.params :id - community id, :postId - post id
 * @param req.body title, description, category
 * @returns {Object} Success message
 * @throws Will throw an error if community not found
 * @throws Will throw an error post not found
 * @throws Will throw an error if req.body fails validation
 */
module.exports.editPost = async (req, res) => {
  try {
    const { id, postId } = req.params
    const user = await req.decodedUser
    const userId = user._id

    const post = await Post.findById(postId)

    //   Check if user editing is the creator of community
    if (!post.author._id.equals(userId)) {
      res.send({ error: "You are not authorized to perform this action" })
      return
    }

    await Post.findByIdAndUpdate(post._id, req.body)

    res.send({ message: `Successfully updated post` })
  } catch (e) {
    console.log(e)
    res.send({ error: e.message })
  }
}
