import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getShifts = createAsyncThunk("/shifts",async () =>{
    try{
        const data = await axios.get(`/shifts`);
        console.log("hemen");
        return data;
    }catch(error){
        if(!error.response) throw error;
    }
});

const loginSlice = createSlice({
    name:'login',
    initialState:{
        shifts : [],
    },
    extraReducers: builder =>{
    //get shift list
    builder.addCase(getShifts.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getShifts.fulfilled, (state, action) => {
        state.shifts = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(getShifts.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
    }
});

export default loginSlice.reducer;