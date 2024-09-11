import React from 'react'
import {CurrentWeatherTop, Time, ChangeTemp, CurrentWeatherMid, CurrentWeatherIcon, CurrentWeatherTemp} from '../constants/Components';

const CurrentWeather = () => {
  return (
    <div className='currentWeather'>
      <CurrentWeatherTop>
        <Time />
        <ChangeTemp />
      </CurrentWeatherTop>
      <CurrentWeatherMid>
        <CurrentWeatherIcon />
        <CurrentWeatherTemp />
      </CurrentWeatherMid>
    </div>
  )
}

export default CurrentWeather
