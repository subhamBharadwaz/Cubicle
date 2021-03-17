// to prevent the cors error for sometime use "https://cors-anywhere.herokuapp.com/"
const base_url =
  'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/';
const appid = `&appid=${process.env.REACT_APP_WEATHER_API}`;

export const byCityName = (city) =>
  `${base_url}data/2.5/weather?q=${city}${appid}&units=metric`;
