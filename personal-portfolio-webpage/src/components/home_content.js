import React from 'react';

export default () => {
  return (
    <div id="home" className="content padding-top">
      <div className="jumbotron">
        <h1 className="text-center">Lorem ipsum dolor sit</h1>
        <h2 className="text-center">consectetur adipiscing elit.</h2>

        <hr className="text-info"/>

        <div className="row padding-top">
          <div className="col-xs-6 col-md-3">
            <a href="https://twitter.com/somallg" className="btn btn-primary btn-block btn-lg margin-bottom"
               target='_blank'><i className="fa fa-twitter"></i> Twitter</a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="https://github.com/somallg" className="btn btn-primary btn-block btn-lg margin-bottom"
               target='_blank'><i className="fa fa-github"></i> Github</a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="https://www.linkedin.com/in/somallg" className="btn btn-primary btn-block btn-lg margin-bottom"
               target='_blank'><i className="fa fa-linkedin"></i> Linkedin</a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="http://www.freecodecamp.com/somallg" className="btn btn-primary btn-block btn-lg margin-bottom"
               target='_blank'><i className="fa fa-fire"></i> freeCodeCamp</a>
          </div>
        </div>
      </div>
    </div>
  );
};
