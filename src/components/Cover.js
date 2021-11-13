import React from "react";
import SearchCityResults from "./SearchCityResults";
import WeatherCard from "./WeatherCard";

const Cover = ({ city, setCity, query }) => {
  return (
    <main className="px-3">
      {city.item ? (
        <WeatherCard city={city} setCity={setCity} />
      ) : (
        <div>
          {query ? (
            <SearchCityResults query={query} setCity={setCity} />
          ) : (
            <div>
              <h1>Weather Forecast App.</h1>
              <p className="lead">
                Start using the application by entering the city from the top
              </p>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default Cover;
