import './App.css'
import CityList from './components/CityList'
import CityForecast from './components/CityForecast'

function App() {

  return (
    <>
      <CityList />
      <CityForecast city="New York" />
    </>
  )
}

export default App;
