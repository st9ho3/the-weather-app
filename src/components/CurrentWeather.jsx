import React from 'react'
import {CurrentWeatherTop, Time, ChangeTemp} from '../constants/Components';

const CurrentWeather = () => {
  return (
    <div className='currentWeather'>
      <CurrentWeatherTop>
        <Time />
        <ChangeTemp />
      </CurrentWeatherTop>
    </div>
  )
}

export default CurrentWeather
