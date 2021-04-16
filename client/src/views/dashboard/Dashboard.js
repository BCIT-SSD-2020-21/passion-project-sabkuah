import React from "react"

const Dashboard = ({ children }) => {
  return (
    <div>
      {children}
      {/* <div className="row">
        <div className="col-xs-12 col-lg-9">{children}</div>

        <div
          className="col-xs-12 col-lg-3"
          // style={{ backgroundColor: 'lightgrey' }}
        >
          <Weather />
          <Calendar onChange={onChange} value={value} />
          <Messaging />
        </div>
      </div> */}
    </div>
  )
}

export default Dashboard
