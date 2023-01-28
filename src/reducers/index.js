import { combineReducers } from 'redux';

import userReducer from './reducer';

const rootReducer = combineReducers({
  portfolio: userReducer,
});

export default rootReducer;