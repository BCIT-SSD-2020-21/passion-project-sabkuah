import axios from "axios"

const BASE_URL = "https://block-watch.herokuapp.com/api"

export async function getAllCommunities() {
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL}/communities`,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    return response.data
  } catch (e) {
    console.log("Error:", e)
  }
}

export async function addPost(post, token, id) {
  try {
    const response = await axios({
      method: "POST",
      url: `${BASE_URL}/communities/${id}/posts`,
      data: post,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(response)

    return response.data
  } catch (e) {
    console.log("Error", e)
  }
}

export async function getPosts(token, id) {
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL}/communities/${id}/posts`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data.posts
  } catch (e) {
    console.log("Error:", e)
  }
}

export async function editPost(token, id, postId, post) {
  console.log("edit called!")
  try {
    const response = await axios({
      method: "PATCH",
      url: `${BASE_URL}/communities/${id}/posts/${postId}`,
      data: post,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    })
    console.log("Edit posts response data>>> ", response.data)
    return response.data
  } catch (e) {
    console.log("Error:", e)
  }
}

export async function addCommunity(community, token) {
  try {
    const response = await axios({
      method: "POST",
      url: `${BASE_URL}/communities`,
      data: community,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (e) {
    console.log("Error", e)
  }
}

export async function editCommunity(community, token, communityId) {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${BASE_URL}/communities/${communityId}`,
      data: community,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (e) {
    console.log("Error", e)
  }
}

export async function getUserCommunities(token) {
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL}/users/communities`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data.user.communities
  } catch (e) {
    console.log("Error:", e)
  }
}

export async function getCommunity({ id, token }) {
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL}/communities/${id}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (e) {
    console.log("Error:", e)
  }
}

export async function joinCommunity({ id, token }) {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${BASE_URL}/communities/${id}/join`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (e) {
    console.log("Error:", e)
  }
}

export async function getCommentsByPostId({ postId, token }) {
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL}/posts/${postId}/comments`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (e) {
    console.log("Error:", e)
  }
}

export async function addNewComment({ postId, token, comment }) {
  const objComment = { body: comment }
  try {
    const response = await axios({
      method: "POST",
      url: `${BASE_URL}/posts/${postId}/comments`,
      data: objComment,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (e) {
    console.log("Error", e)
  }
}

export async function deleteComment({ postId, token, commentId }) {
  console.log("postId>>", postId, "commentId>>", commentId)
  try {
    const response = await axios({
      method: "DELETE",
      url: `${BASE_URL}/posts/${postId}/comments/${commentId}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (e) {
    console.log("Error", e)
  }
}
