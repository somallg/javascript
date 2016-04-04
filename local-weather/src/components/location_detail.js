import React from 'react';

export default ({ location }) => {
  if (!location) {
    return <div>Loading location...</div>
  }
  return (
    <div>
      <p>Location: {location.city}, {location.region}, {location.country}</p> 
    </div>
  )
};
