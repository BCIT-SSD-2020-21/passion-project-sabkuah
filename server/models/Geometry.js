//==========================================
// REQUIRE
//==========================================
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//==========================================
// SCHEMA
//==========================================
module.exports.geometrySchema = new Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
})

//==========================================
// SET UP MODEL
//==========================================
// const Geometry = mongoose.model("Geometry", geometrySchema)

// module.exports = Geometry
