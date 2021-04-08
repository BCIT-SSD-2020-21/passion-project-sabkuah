//==========================================
// REQUIRE
//==========================================
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const passportLocalMongoose = require("passport-local-mongoose")

//==========================================
// SCHEMA
//==========================================
const userSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
})

// this plugin adds a username, hash and salt field to store the username, the hashed password and the salt value.
userSchema.plugin(passportLocalMongoose)

//==========================================
// SET UP MODEL
//==========================================
const User = mongoose.model("User", userSchema)

module.exports = User
