import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getErrorData = createAsyncThunk("/error",async () =>{
    try{
        const data = await axios.get(`/error-data`);
        return data;
    }catch(error){
        if(!error.response) throw error;
    }
});

export const getErrors = createAsyncThunk("/errors",async () =>{
    try{
        const data = await axios.get(`/error-photo`);
        return data;
    }catch(error){
        if(!error.response) throw error;
    }
});

const errorSlice = createSlice({
    name:'error',
    initialState:{
        errorData : '',
        errors : [],
        choosedError : undefined,
    },
    reducers:{
      changeError(state,action){
        state.choosedError = action.payload;
      }
    },
    extraReducers: builder =>{
    //get error data
    builder.addCase(getErrorData.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getErrorData.fulfilled, (state, action) => {
        state.errorData = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(getErrorData.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
    //get errors
    builder.addCase(getErrors.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getErrors.fulfilled, (state, action) => {
        state.errors = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(getErrors.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
    }
});

export default errorSlice.reducer;
export const { changeError } = errorSlice.actions
