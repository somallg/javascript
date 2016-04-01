import React from 'react';

export default () => {
  return (
    <div id="about" className="content padding-top">
      <h1 className="text-center">About me</h1>
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <div className="media">
                <div className="media-left">
                  <img className="media-object" src="http://placehold.it/300x300" alt="About me"/>
                </div>
                <div className="media-body">
                  <h1 className="media-heading">Suspendisse eget sodales lacus.</h1>
                  <span className="lead text-justify">Curabitur arcu orci, mattis eget pellentesque non, suscipit nec lorem. Sed faucibus ante vitae nibh pellentesque pellentesque. Etiam in elementum dui. Donec porttitor, arcu id lacinia mattis, turpis elit suscipit nisl, ut maximus magna orci a ligula. Praesent nec interdum tellus. Suspendisse at dictum ipsum.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
