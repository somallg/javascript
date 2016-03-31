import React from 'react';

export default ({ footer }) => {
  return (
    <div className="row">
      <div className="col-sm-8 col-sm-offset-2">
        <h3>If you have time, you should read more about this incredible human being on his <a href={footer.src}>{footer.source}</a>.</h3>
      </div>
    </div>
  );
}
