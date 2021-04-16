import React, { useState, useEffect } from "react"
import axios from "axios"

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null)

  const community = {
    geometry: {
      coordinates: [-123.1336, 49.1666],
    },
  }

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
  const BASE_URL_WEATHER = process.env.REACT_APP_BASE_URL_WEATHER

  const fetchWeatherData = async () => {
    const res = await axios({
      method: "GET",
      url: BASE_URL_WEATHER,
      params: {
        appid: API_KEY,
        lon: community?.geometry.coordinates[0],
        lat: community?.geometry.coordinates[1],
        units: "metric",
      },
    })

    const weatherData = await res.data
    return weatherData
  }

  useEffect(() => {
    ;(async () => {
      const weatherData = await fetchWeatherData()
      setWeather(weatherData)
    })()
  }, [])

  console.log(weather)
  return (
    <div
      style={{
        border: "solid black 1px",
        display: "flex",
        justifyContent: "center",
        padding: "5%",
      }}
    >
      <div>
        <h1>Weather</h1>
        {weather && (
          <>
            <img
              src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
              alt="Weather icon"
            />
            <p>Description: {weather?.weather[0]?.description}</p>

            <p>Temperature: {weather?.main.temp} &#176;C </p>
            <p>Location: {weather?.name}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default WeatherWidget
