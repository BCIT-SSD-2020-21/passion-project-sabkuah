import React, { useState, useEffect } from "react"
import axios from "axios"
require("dotenv").config()

const Weather = () => {
  const [weather, setWeather] = useState(null)

  const community = {
    geometry: {
      coordinates: [-123.1336, 49.1666],
    },
    location: "Richmond, BC",
  }

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
  }, [])

  return (
    <div className="d-flex justify-content-center mb-4">
      <div>
        <h1 className="text-center">Weather</h1>
        {weather && (
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
        )}
      </div>
    </div>
  )
}

export default Weather
