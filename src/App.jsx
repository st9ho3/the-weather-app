import React, { createContext, useEffect, useState } from 'react';
import {
  Header,
  Details,
  Forecast,
  SearchBar,
  ImageLogo,
  Location,
  DarkMode,
  HeaderDetails,
  CurrentWeather,
  MainView
} from './constants/Components';
import { fetchWeather, fetchForecast } from './utils/APIcall';

const totalContext = createContext('')
export {totalContext}


const App = () => {

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState(''); // Default city

  console.log(weather)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await fetchWeather(city);
        setWeather(weatherData);

        const forecastData = await fetchForecast(city);
        setForecast(forecastData);

        setError(null);
      } catch (err) {
        setError(err.message);
        setWeather(null);
        setForecast(null);
      }
    };

    fetchData();
  }, [city]);

  return (
    <div className="App">
    <totalContext.Provider value = {{weather, forecast}}>
      <Header>
        <ImageLogo />
        <Location
         weather={weather} city={city} />
        <SearchBar 
          setCity={setCity} />
        <DarkMode />
        <HeaderDetails />
      </Header>
      <MainView>
        <Details>
          <CurrentWeather />
        </Details>
        <Forecast>
  
        </Forecast>
      </MainView>
    </totalContext.Provider>
    
      
    </div>
  );
};

export default App;