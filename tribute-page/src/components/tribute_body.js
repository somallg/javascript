import React from 'react';

export default ({ body }) => {
  const renderList = (data) => {
    return data.map((e) => {
      return (
        <li key={e.year}>
          <strong>{e.year}</strong> - {e.event}
        </li>
      );
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <h3 className="text-left">{body.title}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <ul>{renderList(body.data)}</ul>

          <blockquote>
            <h3>{body.quote.title}</h3>
            <footer>
              <cite>{body.quote.author}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
