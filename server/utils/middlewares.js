// =============================================
// REQUIRE
// =============================================
const jwt = require("jsonwebtoken")

/**
 * Require user to authenticate before reaching an endpoint
 * @function
 * @param req.headers.authorization Bearer ${token}
 * @throws Will throw an error if no user in session
 * @throws Will throw an error if no token sent to server
 * @throws Will throw an error if Invalid Token was submitted
 * @param {Function} next
 */
module.exports.requireLogin = (req, res, next) => {
  const { authorization } = req.headers

  //   Extract authorization from headeres
  const token = authorization ? authorization.split(" ")[1] : null

  //   Check if theres user in session
  if (!req.isAuthenticated()) {
    res.status(401).send({ error: "no user in session" })
    return
  }

  // Check if theres token in headers
  if (!token) {
    res.status(401).send({ error: "no token sent to server" })
    return
  }

  // Decode token
  let decoded
  const secret = process.env.ACCESS_TOKEN_SECRET

  try {
    decoded = jwt.verify(token, secret)
  } catch (error) {
    console.error(error)
    res.status(403).send({ error: "Invalid Token" })
    return
  }

  req.decodedUser = decoded
  next()
}

/*   Check if theres user in session
   from scratch (bcrypt)
  if (!req.session.user_id) {
    res.status(401).send({ error: "no user in session" })
    return
  }
 */
