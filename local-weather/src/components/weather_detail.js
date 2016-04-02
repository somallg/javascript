import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchLocation, fetchWeather} from '../actions';
import LocationDetail from '../components/location_detail';

class WeatherDetail extends Component {
  constructor(props) {
    console.log('constructor', props);
    super(props);

    this.state = {
      temp: null,
      unit: 'K'
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.props.fetchLocation()
      .then(() => {
        return this.props.fetchWeather({
          city: this.props.location.city,
          country: this.props.location.country
        });
      })
      .then(() => {
        this.setState({
          temp: Math.round(this.props.weather.main.temp)
        });
      })
  }

  onClick() {
    const { temp, unit } = this.state;
    this.setState({
      temp: unit === 'K' ? Math.round(temp - 273.15) : Math.round(temp + 273.15),
      unit: unit === 'K' ? 'C' : 'K'
    });
  }

  render() {
    console.log('render');
    const { location, weather } = this.props;

    if (_.isEmpty(weather)) {
      return (
        <div>
          <p className="text-center">Loading...</p>
        </div>
      );
    }

    return (
      <div>
        <p className="text-right">Location: {location.city}, {location.country}</p>
        <p className="text-right">Temperature: {this.state.temp}</p>
        <a href="#" onClick={this.onClick.bind(this)}>{this.state.unit}</a>
      </div>
    );
  }
}

export default connect((state) => state, { fetchLocation, fetchWeather })(WeatherDetail);
