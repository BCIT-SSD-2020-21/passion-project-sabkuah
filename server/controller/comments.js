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
 * Retrieves all comments in a post
 * @POST
 * @param req.params :id - post id
 * @returns {Array} list of comments in a post
 * @throws Will throw an error if :id is invalid
 */
module.exports.getAllPostComments = async (req, res) => {
  try {
    const { id } = req.params

    //   Find post
    const post = await Post.findById(id)

    //   Find comments
    const comments = await Comment.find({ post: post._id })
      .select("-post")
      .populate({
        path: "author",
        select: "firstName lastName email location avatar",
      })

    res.send({ comments, post: post.title })
  } catch (e) {
    console.log(e)
    res.send({ error: e.message })
  }
}

/**
 * Add a comment to a post
 * @function
 * @POST
 * @param req.body body
 * @param req.params :id - post id
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

/**
 * Deletes a comment
 * @function
 * @DELETE
 * @param req.params :id - post id, :commentId - comment id
 * @returns {Object} success message
 * @throws Will throw an error if :commentId is invalid
 * @throws Will throw an error if user performing action is not author of the comment
 */
module.exports.deleteComment = async (req, res) => {
  try {
    const user = await req.decodedUser
    const userId = user._id
    const { id, commentId } = req.params

    //    Find User
    const userModel = await User.findById(userId)

    //   Find Post
    const post = await Post.findById(id)

    //   Find Comment
    const comment = await Comment.findById(commentId)

    //   Check if user performing aciton is author of the comment
    if (!userModel._id.equals(comment.author._id)) {
      res.send({ error: "You are not authorized to perform this action" })
      return
    }

    // Delete comment
    const deletedComment = await Comment.findByIdAndDelete(commentId)

    if (deletedComment) {
      res.send({ message: `Successfully deleted comment` })
    }
  } catch (e) {
    console.log(e)
    res.send({ error: e.message })
  }
}
