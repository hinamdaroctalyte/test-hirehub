// authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../services/authServices';
import { handleApiError } from '../utilis/errorHandling';




export const login = createAsyncThunk('auth/login', async (credentials, { dispatch }) => {
    try {
        const user = await authService.login(credentials);
        console.log({ user });
        return user
    } catch (error) {
        // Handle login error
        handleApiError(error)
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: JSON.parse(localStorage.getItem('user')) ? true: false,
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
            localStorage.removeItem("user")
            
        },

    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {

            localStorage.setItem("user", JSON.stringify(action.payload.data))
            const data = action.payload.data
            console.log(data, "payloaddddd");
            state.user = data
            state.role = data.Role
            state.isAuthenticated = true
            state.error = null

        })
            .addCase(login.rejected, (state, action) => {
                state.user = null;
                state.isAuthenticated = false;
                localStorage.removeItem("user")
                state.error = action.error.message;
            });
    }
});

export const { setUser, logout } = authSlice.actions;


export default authSlice.reducer;
