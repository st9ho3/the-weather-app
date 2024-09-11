import React, {useContext} from 'react'
import { totalContext } from '../App'
import { DetailsContext } from './MainView';
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";

const CurrentWeatherTemp = () => {
    const {units} = useContext(DetailsContext)
    const {weather} = useContext(totalContext)
    
    const getTemp = (temp) => {
        if (!weather) return ''
        const Temp = temp === 'C' ? 
        weather.current.temp_c : 
        weather.current.temp_f
        return Temp
    } 
    const temp = getTemp(units).toString().slice(0,2)
    
  return (
    <div className='currentWeatherTemp'>
      <h1> {temp} </h1>
      {units === 'C' ? <RiCelsiusFill /> : <RiFahrenheitFill /> } 
    </div>
  )
}

export default CurrentWeatherTemp
