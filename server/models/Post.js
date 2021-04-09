//==========================================
// REQUIRE
//==========================================
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const User = require("./User")

//==========================================
// SCHEMA
//==========================================
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    enum: ["Incident Reports"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
})

//==========================================
// SET UP MODEL
//==========================================
const Post = mongoose.model("Post", postSchema)

module.exports = Post
