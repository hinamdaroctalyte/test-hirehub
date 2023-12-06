// authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../services/authServices';




export const login = createAsyncThunk('auth/login', async (credentials, { dispatch }) => {
    try {
        const user = await authService.login(credentials);
        console.log({ user });
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

            localStorage.setItem("token", JSON.stringify(action.payload.data))
            const data = action.payload.data
            console.log(data.user.Role, "payloaddddd");
            state.user = data.user
            state.role = data.user.Role
            state.isAuthenticated = true
            state.error = null

        })
            .addCase(login.rejected, (state, action) => {
                state.user = null;
                state.isAuthenticated = false;
                localStorage.removeItem("token")
                state.error = action.error.message;
            });
    }
});

export const { setUser, logout } = authSlice.actions;


export default authSlice.reducer;
