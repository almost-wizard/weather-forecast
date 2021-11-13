import React from "react";
import { toPrettyDate, toTime } from "../../utils/date";

const OneHourForecast = ({ city, data }) => {
  const day = toPrettyDate(data.current.dt);
  const minutelyData = [];
  data.minutely.map((item) => {
    item.time = toTime(item.dt);
    minutelyData.push(item);
  });

  return (
    <div className="text-dark">
      <p className="card-text h3">Weather for the next hour</p>
      <div className="row mb-5">
        <div className="col-lg-2 col-sm-3 col mb-auto ">
          <span className="h1">{data.current.temp}℃</span>
        </div>
        <div className="col-lg-5 col-sm-9 col d-flex flex-column align-items-start">
          <p className="h6 m-0 text-secondary">
            Feels like: {data.current.feels_like}℃
          </p>
          <p className="h6 m-0 text-secondary">
            Humidity: {data.current.humidity}%
          </p>
          <p className="h6 m-0 text-secondary">
            Wind speed: {data.current.wind_speed} m/s
          </p>
        </div>
        <div className="col-lg-5 d-flex flex-column align-items-start">
          <p className="h5 m-0">
            {city.item}, {day}
          </p>
          <p className="h6 m-0 text-secondary">
            {data.current.weather[0].description}
          </p>
        </div>
      </div>
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Precipitation volume</th>
            </tr>
          </thead>
          {minutelyData.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td>{item.time}</td>
                <td>{item.precipitation} mm</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default OneHourForecast;
