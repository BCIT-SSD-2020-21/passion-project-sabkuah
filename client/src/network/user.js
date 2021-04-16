import axios from "axios"
import toastr from "toastr"

const BASE_URL = "https://block-watch.herokuapp.com/api"

/**
 * Registers user in database
 * @function
 * @param user {Object} email, firstName, lastName, location, password
 * @returns {Object} response with token or error message
 */

export async function registerUser(user) {
  const newUser = {
    email: user.email,
    username: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    location: user.location,
    password: user.password,
    avatar: user.avatar,
  }

  try {
    const response = await axios({
      method: "POST",
      url: `${BASE_URL}/users/register`,
      data: newUser,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    return response.data
  } catch (error) {
    console.log("Error: ", error)
    toastr["error"](error)
    // alert("Error: ", error)
  }
}

/**
 * Login user: check credentials in DB, returns jwt token
 * @function
 * @param {Object} username, password
 * @returns {Object} response with token or error message
 */

export async function loginUser(user) {
  const currentUser = {
    ...user,
    username: user.email,
  }
  try {
    const token = await axios({
      method: "POST",
      url: `${BASE_URL}/users/login`,
      data: currentUser,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    return token.data.accessToken
  } catch (e) {
    console.log("Error:", e)
    toastr["error"]("Incorrect username or password")
    // alert("Incorrect username or password")
  }
}

/**
 * Logout user: end user session in database
 * @function
 * @returns {Object} response message
 */

export async function logoutUser() {
  try {
    const response = await axios({
      method: "POST",
      url: `${BASE_URL}/users/logout`,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    console.log("logout response>>", response)
    return response
  } catch (e) {
    console.log("Error:", e)
    toastr["error"]("Error logging out")
    // alert("Error logging out")
  }
}

export async function updateAvatar({ token, avatar }) {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${BASE_URL}/users/updateAvatar`,
      data: avatar,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    })
    console.log("avatar network response>>", response.data)
    return response.data
  } catch (e) {
    console.log("Error:", e)
    toastr["error"]("Error updating profile image")
    // alert("Error updating profile image")
  }
}
