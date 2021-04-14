//==============================================
// REQUIRE
//==============================================
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const session = require("express-session")
const ExpressError = require("./utils/ExpressError")
const { connectDb } = require("./utils/db")

// REQUIRE-AUTH
//---------------
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require("./models/User")

// REQUIRE ROUTES
//----------------------------------------------
const userRoutes = require("./routes/users")
const communityRoutes = require("./routes/communities")
const postRoutes = require("./routes/posts")
const commentRoutes = require("./routes/comments")

//==============================================
// CONFIG
//==============================================
// Read .env file
dotenv.config()

// init express
const app = express()

// This is CORS-enabled for all origins
app.use(cors())

// Parsing Middlewares
app.use(express.urlencoded({ extended: true })) // application/x-www-form-urlencoded
app.use(express.json()) // JSON

// Connect to db
connectDb()

// Express Session
const sessionConfig = {
  secret: process.env.SESSION,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // expires in 1 week
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
}
app.use(session(sessionConfig))

// Passport/Auth
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//==============================================
// ROUTES
//==============================================
app.use("/api/users", userRoutes)
app.use("/api/communities", communityRoutes)
app.use("/api/communities/:id/posts", postRoutes)
app.use("/api/posts/:id/comments", commentRoutes)

//==============================================
// Error Handlers
// =============================================
app.all("*", (req, res, next) => {
  next(new ExpressError("Page not found", 404))
})

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err
  if (!err.message) {
    err.message = "Oh no, Something went wrong"
  }
  res.status(statusCode).send({ error: err.message, status: statusCode })
})

//==============================================
// LISTEN
//==============================================
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Connected to port ${port}`)
})
