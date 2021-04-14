// =============================================
// REQUIRE
// =============================================
const User = require("../models/User")
const Community = require("../models/Community")
const catchAsync = require("../utils/catchAsync")
const { generateToken } = require("../utils/jwt")

// =============================================
// Logic
// =============================================
/**
 * Register user
 * @function
 * @POST
 * @param req.body {Object} email, firstName, lastName, location, password.
 * @returns {Object} Access token
 */
module.exports.registerUser = async (req, res) => {
  try {
    // get body from form
    const { email, firstName, lastName, location, password, avatar } = req.body
    // create new User (only username and email)
    const user = new User({
      username: email,
      email,
      firstName,
      lastName,
      location,
      avatar: avatar
        ? avatar
        : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    })

    // "register" user using .register()
    const registeredUser = await User.register(user, password)

    // login user
    req.login(registeredUser, (err) => {
      if (err) return next(err)

      const user = req.user

      if (user) {
        // generate token
        const accessToken = generateToken({
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          location: user.location,
          avatar: user.avatar,
        })

        // send back token
        res.send({ accessToken })
        return
      }
    })
  } catch (e) {
    console.log(e)
    res.send({ error: e.message })
  }
}

/**
 * Login user
 * @function
 * @POST
 * @param req.body {Object} username, password
 * @returns {Object} Access token
 */
module.exports.loginUser = (req, res) => {
  const user = req.user

  if (user) {
    // generate token
    const accessToken = generateToken({
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      avatar: user.avatar,
    })

    // send back token
    res.send({ accessToken })
    return
  }

  res.send({
    message: "Error loggin in",
  })
}

/**
 * Logout user
 * @function
 * @POST
 * @returns {Object} Logout success message
 */
module.exports.logoutUser = (req, res) => {
  req.logout()
  req.session.destroy()
  res.send({ message: "Successfully logged out" })
}

/**
 * Retrieve all communities by logged in User
 * @function
 * @GET
 * @returns {Array} List of communities by user logged in
 * @throws Will throw an error if user is not found
 */
module.exports.getAllCommunitiesOfUser = catchAsync(async (req, res) => {
  const user = await req.decodedUser
  const userId = user._id

  // Find User By ID
  const userModel = await User.findById(userId)
    .select("communities firstName lastName avatar")
    .populate({
      path: "communities",
      select: "title description location geometry",
    })

  res.send({ user: userModel })
})
