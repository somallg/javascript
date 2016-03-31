import { combineReducers } from 'redux';
import TributeReducer from './tribute_reducer';

const rootReducer = combineReducers({
  data: TributeReducer
});

export default rootReducer;
