import React from 'react';

export default () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toogle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#"><i className="fa fa-pagelines"></i> Somallg</a>
        </div>

        <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li>
              <a href="#home"><i className="fa fa-home"></i> Home</a>
            </li>
            <li>
              <a href="#about"><i className="fa fa-info"></i> About</a>
            </li>
            <li>
              <a href="#portfolio"><i className="fa fa-book"></i> Portfolio</a>
            </li>
            <li>
              <a href="#contact"><i className="fa fa-phone"></i> Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
