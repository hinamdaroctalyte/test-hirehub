import { combineReducers } from 'redux';
import authSlice from '../Slices/Auth/authSlice';
import adminSlice from '../Slices/Admin/adminSlice';
import employerSlices from '../Slices/Employer/EmployerSlice';


const rootReducer = combineReducers({
  auth: authSlice,
  admin: adminSlice,
  employer: employerSlices,
 
});

export default rootReducer;
