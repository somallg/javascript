import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchLocation } from '../actions';

const LocationDetail = ({ fetchLocation }) => {
  console.log('render LocationDetail');
  fetchLocation();
  return <div></div>;
};

export default connect(null, { fetchLocation })(LocationDetail);
