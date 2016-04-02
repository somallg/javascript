import React from 'react';
import { Component } from 'react';

import WeatherDetail from './weather_detail';

export default class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <WeatherDetail />
      </div>
    );
  }
}
