import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    loading : false
}
const LoadingSlice = createSlice({
    name : 'loading',
    initialState,
    reducers : {
        loadingTrue : (state)=>{
            state.loading = true;
        },
        loadingFalse : (state)=>{
            state.loading = false;
        }
    }
})
export const {loadingTrue,loadingFalse} = LoadingSlice.actions; 
export default LoadingSlice.reducer;