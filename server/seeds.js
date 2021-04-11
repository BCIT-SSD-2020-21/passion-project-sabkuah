//=============================
// REQUIRE
//=============================
const dotenv = require("dotenv")
dotenv.config()
const { connectDb } = require("./utils/db")
const mongoose = require("mongoose")
const User = require("./models/User")
const Post = require("./models/Post")
const Community = require("./models/Community")

//=============================
// CONFIG
//=============================
// Connect to db
connectDb()

//=============================
// Seed DB
//=============================

const seedDb = async () => {
  // Delete Collection
  //---------------------
  await User.deleteMany({})
  await Post.deleteMany({})
  await Community.deleteMany({})

  // Create Users
  //-------------------
  const user1 = new User({
    email: "russ@gmail.com",
    username: "russ@gmail.com",
    firstName: "Russ",
    lastName: "Telen",
    location: "Richmond",
  })

  const user2 = new User({
    email: "kal@gmail.com",
    username: "kal@gmail.com",
    firstName: "Kal",
    lastName: "Tang",
    location: "Richmond",
  })

  const user3 = new User({
    email: "sab@gmail.com",
    username: "sab@gmail.com",
    firstName: "Sab",
    lastName: "Kuah",
    location: "Vancouver",
  })

  // Save/Register Users
  //-------------------
  await User.register(user1, "password")
  await User.register(user2, "password")
  await User.register(user3, "password")

  // Create Communities
  //-------------------
  const comm1 = new Community({
    title: "Lansdowne",
    description: "Awesome community near the mall and skytrain",
    location: "Richmond",
    contents: [],
    members: [user2._id],
    creator: user2._id,
  })

  const comm2 = new Community({
    title: "Kitsilano",
    description: "Safe community by the beach",
    location: "Vancouver",
    contents: [],
    members: [user3._id],
    creator: user3._id,
  })

  //   Save created communities
  //-------------------
  await comm1.save()
  await comm2.save()

  // Add members to communities, then save again to update DB
  //-------------------
  comm1.members.push(user1._id)
  comm1.members.push(user3._id)
  await comm1.save()

  //   Create posts to a community
  //-------------------
  const post1 = new Post({
    title: "Potholes",
    description:
      "I damn near broke my suspension today. Way too many potholes on Arcadia road. Theyre MASSIVE too. This needs to be addressed ASAP",
    date: new Date(),
    category: "Incident Reports",
    community: comm1._id,
    author: user1._id,
  })

  const post2 = new Post({
    title: "Missing stop sign",
    description:
      "Somone stole the stop sign @ the corner of Cook rd. Damn hoodlums..",
    date: new Date(),
    category: "Incident Reports",
    community: comm1._id,
    author: user3._id,
  })

  //   Save posts
  //-------------------
  await post1.save()
  await post2.save()

  //   Add Posts to community.contents[], then save to update DB
  //-------------------
  comm1.contents.push(post1._id)
  comm1.contents.push(post2._id)
  await comm1.save()
}

;(async () => {
  await seedDb()
  mongoose.connection.close()
})()
