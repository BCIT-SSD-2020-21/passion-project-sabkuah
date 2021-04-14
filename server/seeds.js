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

// MAPBOX
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding")
const geocodingService = mbxGeocoding({ accessToken: process.env.MAPBOX_TOKEN })

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
    avatar:
      "https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=339&q=80",
    commmunities: [],
  })

  const user2 = new User({
    email: "kal@gmail.com",
    username: "kal@gmail.com",
    firstName: "Kal",
    lastName: "Tang",
    location: "Richmond",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    commmunities: [],
  })

  const user3 = new User({
    email: "sab@gmail.com",
    username: "sab@gmail.com",
    firstName: "Sab",
    lastName: "Kuah",
    location: "Vancouver",
    avatar:
      "https://images.unsplash.com/photo-1507331789086-893e9003c0e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    commmunities: [],
  })

  // Save/Register Users
  //-------------------
  await User.register(user1, "password")
  await User.register(user2, "password")
  await User.register(user3, "password")

  // Get Coordinates
  //--------------------
  const geoResponse1 = await geocodingService
    .forwardGeocode({
      query: "Richmond, BC",
      limit: 1,
    })
    .send()

  const geometry1 = geoResponse1.body.features[0].geometry

  const geoResponse2 = await geocodingService
    .forwardGeocode({
      query: "Vancouver, BC",
      limit: 1,
    })
    .send()

  const geometry2 = geoResponse2.body.features[0].geometry

  // Create Communities
  //-------------------
  const comm1 = new Community({
    title: "Lansdowne",
    description: "Awesome community near the mall and skytrain",
    location: "Richmond, BC",
    geometry: geometry1,
    contents: [],
    members: [user2._id],
    creator: user2._id,
  })

  const comm2 = new Community({
    title: "Kitsilano",
    description: "Safe community by the beach",
    location: "Vancouver, BC",
    geometry: geometry2,
    contents: [],
    members: [user3._id],
    creator: user3._id,
  })

  //   Push created communities to user.communities
  //-------------------
  user2.communities.push(comm1)
  user3.communities.push(comm2)
  await user2.save()
  await user3.save()

  //   Save created communities
  //-------------------
  await comm1.save()
  await comm2.save()

  // Add members to communities, then save again to update DB
  //-------------------
  comm1.members.push(user1._id)
  comm1.members.push(user3._id)
  user1.communities.push(comm1._id)
  user3.communities.push(comm1._id)
  await user1.save()
  await user3.save()
  await comm1.save()

  //   Create posts to a community
  //-------------------
  const post1 = new Post({
    title: "Potholes",
    description:
      "I damn near broke my suspension today. Way too many potholes on Arcadia road. Theyre MASSIVE too. This needs to be addressed ASAP",
    date: new Date(),
    category: "Incident Reports",
    image:
      "https://images.unsplash.com/photo-1601026909629-bad5e1122bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    community: comm1._id,
    author: user1._id,
  })

  const post2 = new Post({
    title: "Missing stop sign",
    description:
      "Somone stole the stop sign @ the corner of Cook rd. Damn hoodlums..",
    date: new Date(),
    category: "Incident Reports",
    image:
      "https://images.unsplash.com/photo-1592360964881-5f3d7459403f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
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
