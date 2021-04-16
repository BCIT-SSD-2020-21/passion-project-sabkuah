import React, { useState, useEffect } from "react"
import { getUserCommunities } from "../../network/community"
import UserCommunitiesScreen from "./UserCommunitiesScreen"
import useLocalStorage from "react-use-localstorage"
import Calendar from "react-calendar"
import Messaging from "../../components/Messaging"
// import Weather from "../../components/Weather"

const UserCommunities = ({ user }) => {
  const [communities, setCommunities] = useState(null)
  const [refreshPost, setRefreshPost] = useState(false)
  const [token] = useLocalStorage("token")
  const [value, onChange] = useState(new Date())

  const handleGetCommunities = async () => {
    const response = await getUserCommunities(token)
    return response
  }

  useEffect(() => {
    ;(async () => {
      const data = await handleGetCommunities()
      setCommunities(data)
    })()
    // eslint-disable-next-line
  }, [refreshPost])

  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-lg-9 animate__animated animate__fadeInLeft">
          <UserCommunitiesScreen
            communities={communities}
            refreshPost={refreshPost}
            setRefreshPost={setRefreshPost}
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

export default UserCommunities
