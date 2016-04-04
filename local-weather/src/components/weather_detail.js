import React from 'react';

import CurrentDate from './current_date';

const WEATHER_CLEAR = 'Clear';
const WEATHER_CLOUDY = 'Cloudy';

export default ({ weather }) => {
  console.log(weather);
  if (!weather) {
    return (
      <div>Loading weather...</div>
    );
  }

  let wiClassName = '';

  switch (weather.weather[0].main) {
    case WEATHER_CLEAR:
      wiClassName = 'wi-day-sunny';
      break;
    case WEATHER_CLOUDY:
      wiClassName = 'wi-day-cloudy-windy';
      break;
    default:
      wiClassName = 'wi-cloud';
  }

  return (
    <div>
      <CurrentDate />
      <p>Weather: {weather.weather[0].description}</p>
      <hr/>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-xs-4">
              <p><i className={`wi ${wiClassName} icon-lg`}></i></p>
            </div>
            <div className="col-xs-8">
              <p className="text-lg">{weather.main.temp}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <p>Humidity: {weather.main.humidity}</p>
          <p>Pressure: {weather.main.pressure}</p>
        </div>
      </div>
    </div>
  );
}
