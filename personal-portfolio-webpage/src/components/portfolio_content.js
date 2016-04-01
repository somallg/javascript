import React from 'react';

export default () => {
  const renderList = () => {
    return Array.apply(null, { length: 6 }).map((e, i) => {
      return (
        <div key={i} className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src="http://placehold.it/250x250" alt={`Project ${i + 1}`}/>
            <div className="caption">
              <h3 className="text-center">Project {i + 1}</h3>
              <div className="row">
                <div className="col-xs-8 col-xs-offset-2">
                  <p className="text-center text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas interdum mattis sem eu venenatis. Aliquam sed tempus tortor.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-xs-offset-3">
                  <a href="#" className="btn btn-primary btn-block" role="button" target='_blank'>More details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div id="portfolio" className="content padding-top">
      <h1 className="text-center">Portfolio</h1>
      <div className="row">
        {renderList()}
      </div>
    </div>
  );
};
