import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCUa__dsU2obpyeyZTb6yImzcJbiWhr-K8';

// create a new component
// produce some html
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// take this component's generated html
// put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));