import React, { useContext } from 'react'
import { totalContext } from '../App'

const Time = () => {
  const {weather} = useContext(totalContext)
  
  const getTime = () => {
    // Extract the time part (HH:MM) from the last updated time string
    return weather.current.last_updated.slice(11);
};

const timeDisplay = () => {
    if (!weather) return ''; // Handle case where weather data is not available

    const localTime = getTime();
    const localHour = Number(localTime.slice(0, 2));
    const localMinutes = localTime.slice(3);
    const currentHour = new Date().getHours();
    const hourDifference = currentHour - localHour;
    
    // Calculate the display hour by adjusting for the current time difference
    const displayHour = localHour + hourDifference; 
    
    // Format the time string for display
    const timeToDisplay = `${displayHour}:${localMinutes}`;
    return timeToDisplay;
};

const timeToDisplay = timeDisplay();
const localTime = weather && getTime()
  

  return (
    <div className='time'>
      {timeToDisplay}
      <div className="localtime">
        {weather && `Local time: ${localTime}`}
      </div>
    </div>
  )
}

export default Time
