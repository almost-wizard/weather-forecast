//
//  --  Getters  --  //
//
//

export const getDayOfWeek = (date, is_compact_view = false) => {
  const dayOfWeek = new Date(date * 1000).getDay();
  return isNaN(dayOfWeek)
    ? null
    : is_compact_view
    ? ["вс", "пн", "вт", "ср", "чт", "пт", "сб"][dayOfWeek]
    : [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
      ][dayOfWeek];
};

export const getMonth = (date, is_compact_view = false) => {
  const month = new Date(date * 1000).getMonth();
  return isNaN(month)
    ? null
    : is_compact_view
    ? [
        "янв",
        "фев",
        "мар",
        "апр",
        "мая",
        "июн",
        "июл",
        "авг",
        "сен",
        "окт",
        "ноя",
        "дек",
      ][month]
    : [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
      ][month];
};

export const getDay = (date) => {
  return new Date(date * 1000).getDate();
};

//
//  --  Formatters  --  //
//
//

export const toPrettyDate = (date) => {
  const dt = new Date(date * 1000);
  return getDayOfWeek(date) + ", " + dt.toLocaleDateString();
};

export const toDayAndMonth = (date, is_compact_view = false) => {
  return getDay(date) + " " + getMonth(date, is_compact_view);
};

export const toTime = (date) => {
  const time = new Date(date * 1000);
  const h = String(time.getHours());
  const m = String(time.getMinutes());
  return (h.length == 1 ? "0" + h : h) + ":" + (m.length == 1 ? "0" + m : m);
};

//
//  --  Other helpers  --  //
//
//

export const isToday = (date) => {
  return getDay(date) === new Date().getDate();
};

export const isWeekend = (date) => {
  return ["сб", "вс"].includes(getDayOfWeek(date, true));
};
