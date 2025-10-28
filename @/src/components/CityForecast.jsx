import { useEffect } from "react";
import CityList from "./CityList";

const CityForecast = ({ city }) => {

    // const [isClicked, setIsClicked] = useEffect(false);

    // TODO: city.summary and city.details return undefined
    function forecastData (city) {
        return (city.summary + "\n" + city.details);
    };

    return (
        <div>
            <p>{forecastData(city)}</p>
        </div>
    );
};

export default CityForecast;
