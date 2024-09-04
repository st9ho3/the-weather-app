import React from 'react'
import {CurrentWeatherTop, Time, ChangeTemp, CurrentWeatherMid, CurrentWeatherIcon} from '../constants/Components';

const CurrentWeather = () => {
  return (
    <div className='currentWeather'>
      <CurrentWeatherTop>
        <Time />
        <ChangeTemp />
      </CurrentWeatherTop>
      <CurrentWeatherMid>
        <CurrentWeatherIcon />
      </CurrentWeatherMid>
    </div>
  )
}

export default CurrentWeather
