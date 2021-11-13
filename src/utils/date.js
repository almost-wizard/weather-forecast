export const getDayOfWeek = (date) => {
  const dayOfWeek = new Date(date * 1000).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][dayOfWeek];
};

export const toPrettyDate = (date) => {
  const dt = new Date(date * 1000);
  return getDayOfWeek(date) + ", " + dt.toLocaleDateString();
};

export const toTime = (date) => {
  const time = new Date(date * 1000);
  const h = String(time.getHours());
  const m = String(time.getMinutes());
  return (h.length == 1 ? "0" + h : h) + ":" + (m.length == 1 ? "0" + m : m);
};

export const toDate = (date) => {
  return new Date(date * 1000).toLocaleDateString();
};

export const daysDelta = (dt_1, dt_2) => {
  const date1 = new Date(dt_1 * 1000).getDate();
  const date2 = new Date(dt_2 * 1000).getDate();
  return Math.abs(Number(date1) - Number(date2));
};
