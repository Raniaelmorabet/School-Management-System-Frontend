import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {Api} from '../Tools/Api'
// to learn more about redux toolkit
// visit the link : https://redux-toolkit.js.org/
// login method u should call it using useDispatch()

const authBaseUrl = import.meta.env.VITE_AUTH_BASE_URL;
export const login = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
    try {
        const response = await Api(`${authBaseUrl}/login`, 'post', data);
        return response.data;
    } catch (error) {
        console.error("Login error:", error);
        return rejectWithValue(error.response.data || "An error occurred during login.");
    }
});
// logout method the same as login method
export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
    try {
        const response = await Api(`${authBaseUrl}/logout`, 'post');
        return response.data;
    } catch (error) {
        console.error("Logout error:", error);
        return rejectWithValue(error.response.data || "An error occurred during logout.");
    }
});
// initial state u can access it using useSelector()
const initialState = {
    token: localStorage.getItem('token') !== null ? localStorage.getItem('token') : null,
    user: localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null,
    role : localStorage.getItem('role') !== null ? JSON.parse(localStorage.getItem('role')) : null,
    error: null,
}
// successLoginRequest Method to handle success login
const successLoginRequest = (state, { payload }) => {
    const { result, errorMessages } = payload || {};
    if (result) {
        state.user = result.user;
        state.token = result.token;
        state.role = result.role;
        state.error = null;
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        localStorage.setItem("role", JSON.stringify(result.role));
    } else if (errorMessages && errorMessages.length) {
        state.error = errorMessages[0];
    } else {
        state.error = "Unexpected error during login.";
    }
};

// successLogoutRequest Method to handle success logout
const successLogoutRequest = (state)=>{
    state.user = null;
    state.token = null;
    state.role = null;
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
}
// auth slice
const AuthSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, successLoginRequest)
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload || "Login failed.";
            })
            .addCase(logout.fulfilled, successLogoutRequest)
            .addCase(logout.rejected, (state, action) => {
                state.error = action.payload || "Logout failed.";
            });
    }
});

export const {} = AuthSlice.actions;
export default AuthSlice.reducer;