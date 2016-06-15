import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  renderMessage() {
    if (this.props.message) {
      return <div>{this.props.message}</div>
    }
  }

  render() {
    return (
      <div>
        Feature
        {this.renderMessage()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.auth.message
  }
}

export default connect(mapStateToProps, actions)(Feature);
