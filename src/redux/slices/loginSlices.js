import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getShifts = createAsyncThunk("/shifts",async () =>{
    try{
        const data = await axios.get(`/shifts`);
        return data;
    }catch(error){
        if(!error.response) throw error;
    }
});

export const userLogin = createAsyncThunk("/user-login",async (info) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try{
    console.log("info :",info);
    const data = await axios.get(`/login/${info.sicil_no}/${info.sifre}/${info.montaj_no}`)
    console.log("data :",data?.data?.Response?.type);
    if(data?.data?.Response?.type==="Success"){
      localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
  }catch(error){
    if(!error.response) throw error;
  }
})

//get user from local storage and place into store
const userLoginFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const loginSlice = createSlice({
    name:'login',
    initialState:{
        shifts : [],
        user:userLoginFromStorage
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
     //login
    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    }
});

export default loginSlice.reducer;