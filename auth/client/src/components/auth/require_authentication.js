import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        debugger;
        this.context.router.push('/');
        browserHistory.push('/');
        console.log(browserHistory == this.context.router);
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        //this.context.router.push('/');
        browserHistory.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
