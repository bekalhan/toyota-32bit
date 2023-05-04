import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getErrorDataList = createAsyncThunk("/error-list",async () =>{
    try{
      console.log("error list slices");
        const data = await axios.get(`/error-list`);
        let list = data?.data?.Response?.data[0];
        return list;
    }catch(error){
        if(!error.response) throw error;
    }
});

const errorList = createSlice({
    name:'errorList',
    initialState:{
        errorList:[],
        count:-1
    },
    reducers:{
      incCount(state){
        state.count += 1;
      }
    },
    extraReducers : builder =>{
    //get error data
    builder.addCase(getErrorDataList.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getErrorDataList.fulfilled, (state, action) => {
        state.errorList = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(getErrorDataList.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
    }
});

export default errorList.reducer;
export const {incCount} = errorList.actions

