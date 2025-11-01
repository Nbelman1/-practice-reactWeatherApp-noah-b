const CityList = ({ citiesData, onClick }) => {

    return (
        <>
            {citiesData.map((city) => (
                <button 
                    key={city.id}
                    onClick={() => onClick(city)}
                >
                    {city.name}
                </button>
            ))}
        </>
    );
};

export default CityList;