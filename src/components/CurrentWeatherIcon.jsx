import React, { useContext } from 'react'
import { totalContext } from '../App'

const CurrentWeatherIcon = () => {

    const {weather} = useContext(totalContext)
    const getText = () => {
        if (!weather) return ''
        return weather.current.condition.text
    } 
    const text = getText().toLowerCase()  
    

    let imageSrc;

switch (text) {
  case 'partly cloudy':
    imageSrc = './images/cloudsnsun.png';
    break;
  case 'clear':
  case 'sunny':
    imageSrc = './images/sun.png';
    break;
  case 'patchy light rain with thunder':
    imageSrc = './images/storm.png';
    break;
  case 'snowy':
    imageSrc = './images/snow.png';
    break;
  case 'moderate rain':
    imageSrc = './images/cloudsnrain.png';
    break;
  default:
    imageSrc = './images/default.png';
}

  return (
    <div className=''>
        <img className='currentWeatherIcon' src={imageSrc} alt={text} />
    </div>
  )
}

export default CurrentWeatherIcon
