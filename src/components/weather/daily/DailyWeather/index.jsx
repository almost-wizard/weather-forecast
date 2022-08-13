import React from "react";
import {
  getDay,
  getMonth,
  getDayOfWeek,
  toTime,
  isWeekend,
} from "@/utils/helpers/date.helpers";
import {
  get_temp_delta,
  get_wind_direction,
  get_uvi_data,
} from "@/utils/helpers/common.helpers";
import { capitalize } from "@/utils/helpers/string.helpers";
import WeatherIcon from "@/components/ui/WeatherIcon";
import classes from "./DailyWeather.module.css";

const DailyCard = ({ data }) => {
  return (
    <div className={classes.container}>
      {data.daily.map((d) => (
        <div
          className={classes.card}
          key={d.dt}
          id={`daily-weather-${getDay(d.dt)}`}
        >
          <div className={classes.header}>
            <p
              className={
                isWeekend(d.dt) ? classes.day + " " + classes.red : classes.day
              }
            >
              {getDay(d.dt)}
            </p>
            <p className={isWeekend(d.dt) ? classes.red : ""}>
              {getMonth(d.dt)}, <br /> {getDayOfWeek(d.dt)}
            </p>
          </div>

          <div className={classes.body}>
            <div className={classes.box}>
              <div className={classes.weather_description}>
                <WeatherIcon
                  id={d.weather[0].icon}
                  className={classes.weather_icon}
                />
                <p>{capitalize(d.weather[0].description)}</p>
              </div>
              <div className={classes.sun_move}>
                <div className={classes.sunrise}>
                  <WeatherIcon id="01c" className={classes.sun_move_icon} />
                  {toTime(d.sunrise)}
                </div>
                <div className={classes.sunset}>
                  <WeatherIcon id="02c" className={classes.sun_move_icon} />
                  {toTime(d.sunset)}
                </div>
              </div>
            </div>
            <div className={classes.box}>
              <div className={classes.temp}>
                <div className={classes.one_day_part_temp}>
                  <p className={classes.grey}>Утром</p>
                  <p>{get_temp_delta(d.temp.night, d.temp.morn)}</p>
                </div>
                <div className={classes.one_day_part_temp}>
                  <p className={classes.grey}>Днём</p>
                  <p>{get_temp_delta(d.temp.morn, d.temp.day)}</p>
                </div>
                <div className={classes.one_day_part_temp}>
                  <p className={classes.grey}>Вечером</p>
                  <p>{get_temp_delta(d.temp.day, d.temp.eve)}</p>
                </div>
                <div className={classes.one_day_part_temp}>
                  <p className={classes.grey}>Ночью</p>
                  <p>{get_temp_delta(d.temp.eve, d.temp.night)}</p>
                </div>
              </div>
              <div className={classes.temp}>
                <div className={classes.one_day_part_temp}>
                  <p className={classes.grey}>Давление</p>
                  <p>{Math.round(d.pressure / 1.33)} мм.рт.ст.</p>
                </div>
                <div className={classes.one_day_part_temp}>
                  <p className={classes.grey}>Влажность</p>
                  <p>{d.humidity}%</p>
                </div>
                <div className={classes.one_day_part_temp}>
                  <p className={classes.grey}>
                    Ветер {get_wind_direction(d.wind_deg)}
                  </p>
                  <p>
                    {Math.round(d.wind_speed)} м/с, порывы до{" "}
                    {Math.round(d.wind_gust)} м/с
                  </p>
                </div>
                <div className={classes.one_day_part_temp}>
                  <p className={classes.grey}>Вероятность осадков</p>
                  <p>{Math.round(d.pop * 100)}%</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.footer}>
            <p className={classes.uvi_text}>
              <span className={classes.grey}>УФ-индекс </span>
              {get_uvi_data(d.uvi)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyCard;
