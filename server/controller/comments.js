// =============================================
// REQUIRE
// =============================================
const User = require("../models/User")
const Post = require("../models/Post")
const Comment = require("../models/Comment")

// ==============================================
// LOGIC
// ==============================================
/**
 * Add a comment to a post
 * @function
 * @POST
 * @param req.body body
 * @param req.params :id, post id
 * @returns {Object} success message
 * @throws Will throw an error if creation of comment fails validation
 */
module.exports.addCommentToPost = async (req, res) => {
  try {
    const user = await req.decodedUser
    const userId = user._id
    const { body } = req.body
    const { id } = req.params

    //   Find User
    const userModel = await User.findById(userId)

    //   Find Post
    const post = await Post.findById(id)

    //   Create new comment
    const comment = new Comment({
      body,
      post: post._id,
      date: new Date(),
      author: userModel._id,
    })

    if (comment) {
      await comment.save()
      res.send({ message: `Successfully added new comment` })
    }
  } catch (e) {
    console.log(e)
    res.send({ error: e.message })
  }
}
