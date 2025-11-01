import './App.css'
import CityList from './components/CityList'
import CityForecast from './components/CityForecast'
import { useState } from 'react';

// mock data
const citiesData = [
  {
          id: 1,
          name: "New York",
          summary: "Sunny, 25°C",
          details: "Clear skies throughout the day with mild temperatures.",
  },
  {
          id: 2, 
          name: "London",
          summary: "Cloudy, 18°C",
          details: "Overcast with occasional light rain in the afternoon.",
  },
  {
          id: 3, 
          name: "Tokyo", 
          summary: "Rainy, 22°C",
          details: "Continuous rain expected throughout the day.",
  }
];


function App() {

  const [ currentCity, setCurrentCity ] = useState(null);

  return (
    <>
      <h2>Weather Details</h2>
      <h3>Select a city to display current weather.</h3>
      <CityList citiesData={citiesData} onClick={setCurrentCity} />
      {/* only display city details if city has been selected */}
      {currentCity && <CityForecast city={currentCity} />}
    </>
  )
}

export default App;
