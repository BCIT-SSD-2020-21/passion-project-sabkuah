import React, { useState, useEffect } from "react"
import CircularProgress from "@material-ui/core/CircularProgress"

import axios from "axios"
require("dotenv").config()

const Weather = ({ community }) => {
  const [weather, setWeather] = useState(null)

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
  const BASE_URL_WEATHER = process.env.REACT_APP_BASE_URL_WEATHER

  const fetchWeatherData = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: BASE_URL_WEATHER,
        params: {
          appid: API_KEY,
          lon: community.geometry.coordinates[0],
          lat: community.geometry.coordinates[1],
          units: "metric",
        },
      })

      const weatherData = await res.data
      return weatherData
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    ;(async () => {
      const weatherData = await fetchWeatherData()
      setWeather(weatherData)
    })()
    console.log("hello")
    // eslint-disable-next-line
  }, [community])

  return (
    <div className="d-flex justify-content-center mb-4">
      <div>
        <h4 className="text-center"> Today's Weather</h4>
        {weather ? (
          <>
            <div className="d-flex justify-content-center">
              <img
                src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                alt="Weather icon"
              />
            </div>

            <p className="text-center font-italic">
              {weather?.weather[0]?.description}
            </p>

            <p className="text-center">
              <strong>Temperature:</strong> {weather?.main.temp} &#176;C{" "}
            </p>
            <p className="text-center">
              <strong>Location:</strong> {community?.location}
            </p>
          </>
        ) : (
          <div className="d-flex justify-content-center">
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  )
}

export default Weather
