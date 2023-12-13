// rootReducer.js
import { combineReducers } from 'redux';
import authSlice from '../Slices/Auth/authSlice';
import adminSlice from '../Slices/Admin/adminSlice';
// import other reducers if available

const rootReducer = combineReducers({
  auth: authSlice,
  admin: adminSlice,
  // other slices or reducers
});

export default rootReducer;
