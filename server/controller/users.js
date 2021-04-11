// =============================================
// REQUIRE
// =============================================
const User = require("../models/User")
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
module.exports.registerUser = catchAsync(async (req, res) => {
  // get body from form
  const { email, firstName, lastName, location, password } = req.body
  // create new User (only username and email)
  const user = new User({
    username: email,
    email,
    firstName,
    lastName,
    location,
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
      })

      // send back token
      res.send({ accessToken })
      return
    }
  })
})

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
