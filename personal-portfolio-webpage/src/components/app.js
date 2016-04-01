import React from 'react';
import { Component } from 'react';

import NavigationBar from './navigation_bar';
import MainContent from './main_content';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <MainContent />
      </div>
    );
  }
}
