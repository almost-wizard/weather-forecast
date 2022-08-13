import React from "react";
import {
  BrokenClouds,
  ClearDay,
  ClearNight,
  FewCloudsDay,
  FewCloudsNight,
  Mist,
  RainDay,
  RainNigth,
  ScatteredClouds,
  ShowerRain,
  SnowDay,
  SnowNight,
  Thunderstorm,
  Sunrise,
  Sunset,
} from "./icons";

const WeatherIcon = ({ id, className = "" }) => {
  const icon_code = id.toString().slice(0, 2);
  const times_of_day = id.toString()[2];

  const icon_codes = {
    d: {
      "01": ClearDay,
      "02": FewCloudsDay,
      "03": ScatteredClouds,
      "04": BrokenClouds,
      "09": ShowerRain,
      10: RainDay,
      11: Thunderstorm,
      13: SnowDay,
      50: Mist,
    },
    n: {
      "01": ClearNight,
      "02": FewCloudsNight,
      "03": ScatteredClouds,
      "04": BrokenClouds,
      "09": ShowerRain,
      10: RainNigth,
      11: Thunderstorm,
      13: SnowNight,
      50: Mist,
    },
    c: {
      "01": Sunrise,
      "02": Sunset,
    },
  };

  return (
    <img
      className={className}
      src={icon_codes[times_of_day][icon_code]}
    />
  );
};

export default WeatherIcon;
