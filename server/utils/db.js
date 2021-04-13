// ==========
// REQUIRE
// ==========
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// Read .env file
dotenv.config()

// Connect Mongoose
let localDb = process.env.LOCAL_DB
let atlasDb = process.env.DB

module.exports.connectDb = async () => {
  try {
    await mongoose.connect(atlasDb, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })

    console.log("MONGO CONNECTED")
  } catch (e) {
    console.log("MONGO CONNECTION ERROR :(")
    console.log(e)
  }
}
