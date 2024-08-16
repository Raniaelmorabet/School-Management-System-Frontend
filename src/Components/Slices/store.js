import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './AuthSlice';
// this is the store of our app
export const store = configureStore({
    // inside the reduce prop we put all our slices
    reducer : {
        authentication : AuthSlice,
    }
})