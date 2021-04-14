//==========================================
// REQUIRE
//==========================================
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Community = require("./Community")
const passportLocalMongoose = require("passport-local-mongoose")

//==========================================
// SCHEMA
//==========================================
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  communities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
})

// this plugin adds a username, hash and salt field to store the username, the hashed password and the salt value.
userSchema.plugin(passportLocalMongoose)

//==========================================
// SET UP MODEL
//==========================================
const User = mongoose.model("User", userSchema)

module.exports = User
