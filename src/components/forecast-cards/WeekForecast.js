import React from "react";
import { toPrettyDate, getDayOfWeek } from "../../utils/date";

const WeekForecast = ({ city, data }) => {
  const weekData = [];
  data.daily.map((item) => {
    item.weekday = getDayOfWeek(item.dt);
    item.day = toPrettyDate(item.dt);
    weekData.push(item);
  });

  return (
    <div className="text-dark">
      <p className="card-text h3">Weather for the week in {city.item}</p>
      {weekData.map((item, index) => (
        <div key={index}>
          <div className="row mb-5">
            <div className="col-lg-4 col-sm mb-auto ">
              <span className="h2">
                {item.temp.min}℃ ~ {item.temp.max}℃
              </span>
            </div>
            <div className="col-lg-5 col-sm d-flex flex-column align-items-start">
              <p className="h6 m-0 text-secondary">
                Humidity: {item.humidity}%
              </p>
              <p className="h6 m-0 text-secondary">
                Wind speed: {item.wind_speed} m/s
              </p>
              <p className="h6 m-0 text-secondary">
                {item.weather[0].description}
              </p>
            </div>
            <div className="col-lg-3 d-flex flex-column align-items-start">
              <p className="h3 m-0">{item.day}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body d-flex flex-column align-items-start">
                  <span className="card-title h5">Night</span>
                  <span className="h1">{item.temp.night}℃</span>
                  <span className="h6 text-secondary">
                    Feels like: {item.feels_like.night}℃
                  </span>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="card">
                <div className="card-body d-flex flex-column align-items-start">
                  <span className="card-title h5">Morning</span>
                  <span className="h1">{item.temp.morn}℃</span>
                  <span className="h6 text-secondary">
                    Feels like: {item.feels_like.morn}℃
                  </span>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="card">
                <div className="card-body d-flex flex-column align-items-start">
                  <span className="card-title h5">Day</span>
                  <span className="h1">{item.temp.day}℃</span>
                  <span className="h6 text-secondary">
                    Feels like: {item.feels_like.day}℃
                  </span>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="card">
                <div className="card-body d-flex flex-column align-items-start">
                  <span className="card-title h5">Evening</span>
                  <span className="h1">{item.temp.eve}℃</span>
                  <span className="h6 text-secondary">
                    Feels like: {item.feels_like.eve}℃
                  </span>
                </div>
              </div>
            </div>

            {index != weekData.length - 1 && (
              <hr className="bg-primary border-5 border-top border-primary mt-5 mb-5"></hr>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekForecast;
