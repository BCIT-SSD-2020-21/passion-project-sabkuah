//==========================================
// REQUIRE
//==========================================
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const User = require("./User")
const Post = require("./Post")

//==========================================
// SCHEMA
//==========================================
const commentSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
})

//==========================================
// SET UP MODEL
//==========================================
const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment
