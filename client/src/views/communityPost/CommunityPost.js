import React, { useState, useEffect } from "react"
import CommunityPostScreen from "./CommunityPostScreen"
import useLocalStorage from "react-use-localstorage"
import { useParams } from "react-router-dom"
import { getPosts, editPost } from "../../network/community"
import toastr from "toastr"
import Calendar from "react-calendar"
import Messaging from "../../components/Messaging"
import Weather from "../../components/Weather"

const CommunityPosts = () => {
  const [posts, setPosts] = useState(null)
  let { id } = useParams()
  const [token] = useLocalStorage("token")
  const [refreshEdit, setRefreshEdit] = useState("")
  const [value, onChange] = useState(new Date())
  // const [refreshPost, setRefreshPost] = useState('')

  const handleEdit = async (data) => {
    setRefreshEdit("")
    const postData = {
      title: data.title,
      description: data.description,
      category: data.category,
      image: data.image,
    }
    const response = await editPost(token, id, data._id, postData)
    setRefreshEdit(response.message)
    toastr["success"](response.message)
    // alert(response.message)
  }

  const handleGetPosts = async () => {
    const response = await getPosts(token, id)
    return response
  }

  useEffect(() => {
    ;(async () => {
      const data = await handleGetPosts()
      console.log(data)
      setPosts(data)
    })()
    console.log(posts)
    //eslint-disable-next-line
  }, [refreshEdit])

  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-lg-9 animate__animated animate__fadeInLeft">
          <CommunityPostScreen
            posts={posts}
            handleEdit={handleEdit}
            setRefreshEdit={setRefreshEdit}
          />
        </div>
        <div className="col-xs-12 col-lg-3 animate__animated animate__fadeInRight">
          {/* <Weather community={community} /> */}
          <Calendar onChange={onChange} value={value} />
          <Messaging />
        </div>
      </div>
    </div>
  )
}

export default CommunityPosts
