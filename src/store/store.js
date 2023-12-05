import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/UserReducer';
import thunk from 'redux-thunk';



const store = configureStore({
  reducer: {
    user: userReducer,
    // other reducers
  },
  middleware: [thunk],
  
});

export default store;
