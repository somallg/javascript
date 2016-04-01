import React from 'react';

export default () => {
  return (
    <div id="contact" className="content padding-top">
      <h1 className="text-center">Contact me</h1>
      <h3 className="text-center">Feel free to drop me an email to provide some feedback on my website, some
        suggestions, or to just say hello!</h3>
      <div className="row">
        <a href="mailto:info@somallg.com" target='_blank'><h1 className="text-center">info@somallg.com</h1></a>
      </div>
      <h2 className="text-center">Or find me on</h2>
      <div className="row">
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
  );
};
