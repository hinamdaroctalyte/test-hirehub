// rootReducer.js
import { combineReducers } from 'redux';
import authSlice from '../Slices/authSlice';
// import other reducers if available

const rootReducer = combineReducers({
  auth: authSlice,
  // other slices or reducers
});

export default rootReducer;
