import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {Api} from '../Tools/Api'
// to learn more about redux toolkit
// visit the link : https://redux-toolkit.js.org/
// login method u should call it using useDispatch()

const authBaseUrl = import.meta.env.VITE_AUTH_BASE_URL;
export const login =  createAsyncThunk("auth/login",async (data)=>{
    try{
        const res = Api(`${authBaseUrl}/login`,'post',data)
        .then(response=>response.data);
        console.log(res);
        return res;
    }catch(error){
        console.log(error);
        throw error;
    }
});
// logout method the same as login method
export const logout = createAsyncThunk("/logout",async ()=>{
    try{
        const res = Api(`${authBaseUrl}/logout`,'post')
        .then(response=>response.data);
        console.log(res)
        return res
    }catch(error){
        throw error;
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
const successLoginRequest =  (state, { payload }) => {
    if(payload.result){
        state.admin = payload.result.user;
        state.token = payload.result.token;
        state.role = payload.result.role;
        state.error = null,
        // console.log(state.admin,state.token);
        localStorage.setItem("token", payload.result.token);
        localStorage.setItem("user", JSON.stringify(payload.result.user));
        localStorage.setItem("role", JSON.stringify(payload.result.role));
    }
    else if(payload.errorMessages){
        state.error = payload.errorMessages[0];
    }
}
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
    name  : "auth",
    initialState,
    extraReducers : (builder)=>{
        builder
        .addCase(login.fulfilled,successLoginRequest)
        .addCase(logout.fulfilled,successLogoutRequest);
    }
})
export const {} = AuthSlice.actions;
export default AuthSlice.reducer;