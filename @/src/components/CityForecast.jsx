import { useEffect } from "react";
import CityList from "./CityList";

const CityForecast = ({ city }) => {

    function forecastData (city) {
        return (city.summary + "\n" + city.details);
    };

    return (
        <div>
            <h4>Live forecast for {city.name}</h4>
            <p>{forecastData(city)}</p>
        </div>
    );
};

export default CityForecast;
