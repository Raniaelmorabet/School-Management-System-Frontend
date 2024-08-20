import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './AuthSlice';
import LoadingSlice from "./LoadingSlice";
// this is the store of our app
export const store = configureStore({
    // inside the reduce prop we put all our slices
    reducer : {
        authentication : AuthSlice,
        loading : LoadingSlice
    }
})