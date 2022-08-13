export const get_wind_direction = (deg) => {
  if (deg < 22.5) return "северный";
  else if (deg < 67.5) return "северо-восточный";
  else if (deg < 112.5) return "восточный";
  else if (deg < 157.5) return "юго-восточный";
  else if (deg < 202.5) return "южный";
  else if (deg < 247.5) return "юго-западный";
  else if (deg < 292.5) return "западный";
  else if (deg < 337.5) return "северо-западный";
  else return "северный";
};

export const get_uvi_data = (uvi) => {
  uvi = Math.round(uvi);
  if (uvi <= 2) return `${uvi}, низкий`;
  else if (uvi <= 5) return `${uvi}, умеренный`;
  else if (uvi <= 7) return `${uvi}, высокий`;
  else if (uvi <= 10) return `${uvi}, очень высокий`;
  else return `${uvi}, экстремальный`;
};

export const format_temp = (t) => {
  t = Math.round(t);
  if (t > 0) {
    return `+${t}°`;
  } else {
    return `${t}°`;
  }
};

export const get_temp_delta = (t1, t2) => {
  t1 = Math.round(t1);
  t2 = Math.round(t2);
  if (t1 === t2) {
    return format_temp(t1);
  } else {
    return [t1, t2]
      .sort((a, b) => a - b)
      .map((t) => format_temp(t))
      .join("...");
  }
};
