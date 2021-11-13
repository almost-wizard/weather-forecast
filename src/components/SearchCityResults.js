import React from "react";
import { allowedCities, cookieAge } from "../utils/config";

const SearchCityResults = ({ query, setCity }) => {
  const result = allowedCities.filter(function (val) {
    return val.item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  if (!result.length) {
    return (
      <div>
        <h2>No cities found for this request</h2>
      </div>
    );
  }

  const changeCity = (e) => {
    const value = allowedCities.find((i) => i.item === e.target.dataset.value);
    setCity(value);
    document.cookie = `city=${value.item}; max-age=${cookieAge}`;
    document.cookie = `lat=${value.coords.lat}; max-age=${cookieAge}`;
    document.cookie = `lon=${value.coords.lon}; max-age=${cookieAge}`;
  };

  return (
    <div className="row">
      {result.map((item) => (
        <a
          key={item.item}
          href="#"
          data-value={item.item}
          className="list-group-item bg-secondary text-white col-sm-4"
          onClick={(e) => changeCity(e)}
        >
          {item.item}
        </a>
      ))}
    </div>
  );
};

export default SearchCityResults;
