import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocationDetail from './location_detail';
import WeatherDetail from './weather_detail';

import { fetchLocation, fetchWeather } from '../actions';

class WeatherApp extends Component {
  componentWillMount() {
    this.props.fetchLocation()
      .then(() => {
        const { location } = this.props;
        return this.props.fetchWeather({
          city: location.city,
          country: location.country
        });
      });
  }

  render() {
    return (
      <div className="well well-lg">
        <LocationDetail location={this.props.location}/>
        <WeatherDetail weather={this.props.weather}/>
      </div>
    );
  }
}

export default connect((state) => ({ location: state.location, weather: state.weather }), { fetchLocation, fetchWeather })(WeatherApp);
