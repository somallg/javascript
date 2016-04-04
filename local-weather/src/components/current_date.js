import React from 'react';

export default () => {
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (
    <p>{days[now.getDay()]}, {now.getHours()}:00</p>
  );
}
