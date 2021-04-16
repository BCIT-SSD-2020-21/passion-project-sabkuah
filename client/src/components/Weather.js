import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getCommunity } from '../network/community';
import useLocalStorage from 'react-use-localstorage';

import axios from 'axios';
require('dotenv').config();

const Weather = ({ communityId }) => {
  const [weather, setWeather] = useState(null);
  const [token] = useLocalStorage('token', '');

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const BASE_URL_WEATHER = process.env.REACT_APP_BASE_URL_WEATHER;

  const handleGetCommunity = async () => {
    const response = await getCommunity({ id: communityId, token });
    // console.log('community', response.community);
    return response?.community;
  };

  const fetchWeatherData = async () => {
    try {
      const community = await handleGetCommunity();

      const res = await axios({
        method: 'GET',
        url: BASE_URL_WEATHER,
        params: {
          appid: API_KEY,
          lon: community?.geometry.coordinates[0],
          lat: community?.geometry.coordinates[1],
          units: 'metric',
        },
      });

      const weatherData = await res.data;
      return weatherData;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      const weatherData = await fetchWeatherData();
      setWeather(weatherData);
    })();
    // eslint-disable-next-line
  }, [communityId]);

  // console.log('community in weahter', community);
  return (
    <div className='d-flex justify-content-center mb-4 shadow p-3'>
      <div>
        <h5 className='text-center brand-font'> Today's Weather</h5>
        {weather ? (
          <>
            <div className='d-flex justify-content-center'>
              <img
                src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                alt='Weather icon'
              />
            </div>

            <p className='text-center font-italic'>
              {weather?.weather[0]?.description}
            </p>

            <p className='text-center'>
              <strong>Temperature:</strong> {weather?.main.temp} &#176;C{' '}
            </p>
            <p className='text-center'>
              <strong>Location:</strong> {weather?.name}
            </p>
          </>
        ) : (
          <div className='d-flex justify-content-center'>
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
