import React from 'react';
import ReactDOM from 'react-dom';

// create a new component
// produce some html
const App = () => {
    console.log(this);
    return <div>Hi</div>;
};

// take this component's generated html
// put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));