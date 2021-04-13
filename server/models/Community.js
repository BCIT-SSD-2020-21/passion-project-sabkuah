//==========================================
// REQUIRE
//==========================================
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const User = require("./User")
const Post = require("./Post")
const { geometrySchema } = require("./Geometry")

//==========================================
// SCHEMA
//==========================================
const communitySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  geometry: {
    type: geometrySchema,
  },
  location: {
    type: String,
  },
  contents: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
})

//==========================================
// SET UP MODEL
//==========================================
const Community = mongoose.model("Community", communitySchema)

module.exports = Community
