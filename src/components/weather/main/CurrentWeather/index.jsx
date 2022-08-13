import React from "react";
import {
  get_wind_direction,
  format_temp,
} from "@/utils/helpers/common.helpers";
import { toPrettyDate } from "@/utils/helpers/date.helpers";
import { capitalize } from "@/utils/helpers/string.helpers";
import WeatherIcon from "@/components/ui/WeatherIcon";
import classes from "./CurrentWeather.module.css";

const CurrentWeather = ({ city, data }) => {
  return (
    <div className={classes.container_border}>
      <div className={classes.container_info}>
        <p className={classes.title}>{city}</p>
        <p className={classes.title}>
          {capitalize(toPrettyDate(data.current.dt))}
        </p>
      </div>
      <div className={classes.container}>
        <div className={classes.box}>
          <div className={classes.left_box_icon}>
            <WeatherIcon
              id={data.current.weather[0].icon}
              className={classes.weather_icon}
            />
          </div>
          <div className={classes.left_box_info}>
            <div className={classes.left_box_deegre}>
              {format_temp(data.current.temp)}
            </div>
            <p className={classes.left_box_text}>
              {capitalize(data.current.weather[0].description)}
            </p>
          </div>
        </div>
        <div className={classes.box}>
          <div className={classes.right_box_info}>
            <p className={classes.right_box_info_text}>
              Давление: {Math.round(data.current.pressure / 1.33)} мм.рт.ст.
            </p>
            <p className={classes.right_box_info_text}>
              Влажность: {data.current.humidity}%
            </p>
            <p className={classes.right_box_info_text}>
              Ветер {get_wind_direction(data.current.wind_deg)},{" "}
              {Math.round(data.current.wind_speed)} м/с, порывы до{" "}
              {Math.round(data.current.wind_gust)} м/с
            </p>
            <p className={classes.right_box_info_text}>
              Вероятность осадков: {Math.round(data.daily[0].pop * 100)}%
            </p>
            <p className={classes.right_box_info_text}>
              Ощущается как: {format_temp(data.current.feels_like)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
