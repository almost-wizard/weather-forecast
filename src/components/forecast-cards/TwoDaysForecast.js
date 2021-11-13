import React from "react";
import {
  toTime,
  toDate,
  toPrettyDate,
  daysDelta,
  getDayOfWeek,
} from "../../utils/date";

const TwoDaysForecast = ({ city, data }) => {
  const day = toPrettyDate(data.current.dt);
  const hourlyData = [];
  data.hourly.map((item) => {
    item.date = toDate(item.dt);
    item.time = toTime(item.dt);
    hourlyData.push(item);
  });
  const daysData = [[], [], []];
  hourlyData.map((item) =>
    daysData[daysDelta(item.dt, data.current.dt)].push(item)
  );

  return (
    <div className="text-dark">
      <p className="card-text h3">Weather for the 48 hours</p>
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
      {daysData.map((i, index) => (
        <div className="row" key={index}>
          <div className="col-sm-1">
            <p className="weekday_card">{getDayOfWeek(i[0].dt).slice(0, 3)}</p>
          </div>
          <div className="col-sm-11">
            <div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Temperature</th>
                    <th scope="col">Wind</th>
                    <th scope="col">Feels like</th>
                  </tr>
                </thead>
                {i.map((item, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>{item.time}</td>
                      <td>{item.temp}℃</td>
                      <td>{item.wind_speed} m/s</td>
                      <td>{item.feels_like}℃</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
          {index != daysData.length - 1 && (
            <hr className="bg-primary border-5 border-top border-primary"></hr>
          )}
        </div>
      ))}
    </div>
  );
};

export default TwoDaysForecast;
