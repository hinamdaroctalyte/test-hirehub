// authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../services/authServices';


export const login = createAsyncThunk('auth/login', async (credentials, { dispatch }) => {
    try {
      const user = await authService.login(credentials);
      console.log({user});
      return user
    } catch (error) {
      // Handle login error
      console.log(error);
    }
  });

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    role: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token")
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
        if (!action.meta.arg.rememberMe){
            localStorage.removeItem("token");
        }
        else{
            localStorage.setItem("token", JSON.stringify(action.payload))
            state.user = action.payload.user
            state.role = action.payload.user.Role
            state.isAuthenticated = true
            state.error = null
            switch (action.payload.user.Role) {
                case "admin":
                  // Redirect to admin dashboard
                  break;
                case "candidate":
                  // Redirect to candidate dashboard
                  break;
                case "employer":
                  // Redirect to employer dashboard
                  break;
                default:
                  // Redirect to a default route
                  break;
              }

        }

    })
  }
}); 

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
