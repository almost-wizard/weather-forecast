import React from "react";
import classes from "./DailyTrackWeather.module.css";
import {
  isToday,
  isWeekend,
  toDayAndMonth,
  getDayOfWeek,
  getDay,
} from "@/utils/helpers/date.helpers";
import { capitalize } from "@/utils/helpers/string.helpers";
import { format_temp } from "@/utils/helpers/common.helpers";
import WeatherIcon from "@/components/ui/WeatherIcon";

const DailyTrackWeather = ({ data }) => {
  const go = (dt) => {
    document
      .getElementById(`daily-weather-${getDay(dt)}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.container}>
      {data.daily.map((d) => (
        <div key={d.dt} className={classes.card} onClick={() => go(d.dt)}>
          <p className={isWeekend(d.dt) ? classes.red_text : ""}>
            {capitalize(getDayOfWeek(d.dt, true))}
          </p>
          <p className={classes.date_text}>{toDayAndMonth(d.dt, true)}</p>
          <WeatherIcon
            id={d.weather[0].icon}
            className={classes.weather_icon}
            width="70%"
          />
          <p className={classes.day_temp_text}>
            {isToday(d.dt) && "днём "}
            {format_temp(d.temp.day)}
          </p>
          <p className={classes.night_temp_text}>
            {isToday(d.dt) && "ночью "}
            {format_temp(d.temp.night)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DailyTrackWeather;
