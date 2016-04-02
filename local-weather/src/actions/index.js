import axios from 'axios';

export const FETCH_LOCATION = 'FETCH_LOCATION';
export const FETCH_WEATHER = 'FETCH_WEATHER';

const LOCATION_API_URL = 'http://ipinfo.io';
const WEATHER_API_KEY = '6c186bd312fb6c44839158e1da4c8d1e';
const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}`;

export const fetchLocation = () => {
  return {
    type: FETCH_LOCATION,
    payload: axios.get(LOCATION_API_URL)
  }
};

export const fetchWeather = (data) => {
  return {
    type: FETCH_WEATHER,
    payload: axios.get(`${WEATHER_API_URL}&q=${data.city},${data.country}`)
  }
};
