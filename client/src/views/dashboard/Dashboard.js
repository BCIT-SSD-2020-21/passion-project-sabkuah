import React, { useState } from "react"
import Calendar from "react-calendar"
import Messaging from "../../components/Messaging"
import Weather from "../../components/Weather"
import { useLocation } from "react-router-dom"

const Dashboard = ({ children }) => {
  const [value, onChange] = useState(new Date())
  const location = useLocation()

  const community = {
    geometry: {
      coordinates: [-123.1336, 49.1666],
    },
    location: "Richmond, BC",
    _id: "6078d72775f50219bdf21e83",
  }

  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-lg-9">{children}</div>

        <div
          className="col-xs-12 col-lg-3"
          // style={{ backgroundColor: 'lightgrey' }}
        >
          {location.pathname == `/user/communities/${community._id}` && (
            <Weather community={community} />
          )}

          <Calendar onChange={onChange} value={value} />
          <Messaging />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
