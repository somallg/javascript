import { combineReducers } from 'redux';

import { FETCH_LOCATION, FETCH_WEATHER } from '../actions';

const reducerCreater = (type) => {
  return (state = null, action) => {
    switch (action.type) {
      case type:
        return action.payload.data;
    }
    return state;
  };
};

const rootReducer = combineReducers({
  location: reducerCreater(FETCH_LOCATION),
  weather: reducerCreater(FETCH_WEATHER)
});

export default rootReducer;
