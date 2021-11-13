import React, { useState, useMemo } from "react";
import axios from "axios";
import { apiKey, cookieAge } from "../utils/config";
import { getCookie } from "../utils/cookie";
import OneHourForecast from "./forecast-cards/OneHourForecast";
import TwoDaysForecast from "./forecast-cards/TwoDaysForecast";
import WeekForecast from "./forecast-cards/WeekForecast";

const WeatherCard = ({ city, setCity }) => {
  const [chapter, setChapter] = useState(getCookie("chapter") || "oneHour");
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useMemo(() => {
    if (city.item) {
      const params =
        `lat=${city.coords.lat}` +
        `&lon=${city.coords.lon}` +
        `&appid=${apiKey}` +
        `&units=metric` +
        `&exclude=alerts`;
      setIsLoading(true);
      axios
        .get("https://api.openweathermap.org/data/2.5/onecall?" + params)
        .then((res) => {
          setWeatherData(res.data);
          setIsLoading(false);
        });
    }
  }, [city]);

  const changeChapter = (e) => {
    const value = e.target.dataset.value;
    setChapter(value);
    document.cookie = `chapter=${value}; max-age=${cookieAge}`;
  };

  return (
    <div
      id="weather_card"
      className="card text-center bg-secondary rounded mx-auto"
    >
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <button
              className={
                "btn" + (chapter == "oneHour" ? " btn-light" : " btn-primary")
              }
              data-value="oneHour"
              onClick={(e) => changeChapter(e)}
            >
              One hour
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                "btn" + (chapter == "twoDays" ? " btn-light" : " btn-primary")
              }
              data-value="twoDays"
              onClick={(e) => changeChapter(e)}
            >
              48 hours
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                "btn" + (chapter == "week" ? " btn-light" : " btn-primary")
              }
              data-value="week"
              onClick={(e) => changeChapter(e)}
            >
              Week
            </button>
          </li>
        </ul>
      </div>
      <div id="weather_card-body" className="card-body bg-light">
        {isLoading ? (
          <h3 className="text-dark">Loading... Please, wait</h3>
        ) : (
          <>
            {chapter == "oneHour" && (
              <OneHourForecast city={city} data={weatherData} />
            )}
            {chapter == "twoDays" && (
              <TwoDaysForecast city={city} data={weatherData} />
            )}
            {chapter == "week" && (
              <WeekForecast city={city} data={weatherData} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
