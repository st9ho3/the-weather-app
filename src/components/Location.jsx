import React from 'react';
import { IoLocationOutline } from "react-icons/io5";

const Location = ({ weather }) => {
  return (
    <div className='location'>
      <IoLocationOutline className='locationIcon' />
      {weather && weather.location ? (
        <p className='locationDetails'>
          {weather.location.name}, {weather.location.country}
        </p>
      ) : (
        <p className='locationDetails'>Loading location...</p>
      )}
    </div>
  );
};

export default Location;