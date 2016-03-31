import React from 'react';

export default ({ image }) => {
  return (
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="thumbnail">
          <img className="img-responsive" src={image.src} alt={image.src}/>
          <div className="caption text-center">
            <span>{image.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
