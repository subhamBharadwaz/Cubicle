export const dateBuilder = (d) => {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let day = days[d.getDay()];
  const date = () => {
    const dateValue = new Date().getDate();
    if (dateValue <= 0) {
      return `0${dateValue}`;
    } else {
      return dateValue;
    }
  };
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date()} ${month} ${year}`;
};

export let ampm = 'AM';

export const hourValue = () => {
  let hours = new Date().getHours();
  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    ampm = 'PM';
  }
  if (hours <= 0) {
    return `0${hours}`;
  } else {
    return hours;
  }
};
export const minuteValue = () => {
  const minutes = new Date().getMinutes();
  if (minutes <= 0) {
    return `0${minutes}`;
  } else {
    return minutes;
  }
};
export const curTime = setInterval(() => {
  return `${hourValue()}:${minuteValue()}:${ampm}`;
}, 1000);
