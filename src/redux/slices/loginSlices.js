import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
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
  try{
    const data = await axios.get(`/login/${info.s_no}/${info.password}/${info.m_no}`)
    if(data?.data?.Response?.type==="Success"){
      localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
  }catch(error){
    if(!error.response) throw error;
  }
});

//logout
export const logoutAction = createAsyncThunk(
  "/user/logout",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      localStorage.removeItem("userInfo");
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//get user from local storage and place into store
const userLoginFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const loginSlice = createSlice({
    name:'login',
    initialState:{
        shifts : [],
        user:userLoginFromStorage,
        errorLogin:false
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),    extraReducers: builder =>{
    //get shift list
    builder.addCase(getShifts.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getShifts.fulfilled, (state, action) => {
        state.shifts = action?.payload?.data;
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
        //logout
        builder.addCase(logoutAction.pending, (state, action) => {
          state.loading = false;
        });
        builder.addCase(logoutAction.fulfilled, (state, action) => {
          state.user = undefined;
          state.loading = false;
          state.appErr = undefined;
          state.serverErr = undefined;
        });
        builder.addCase(logoutAction.rejected, (state, action) => {
          state.appErr = action?.payload?.message;
          state.serverErr = action?.error?.message;
          state.loading = false;
        });
    }
});

export default loginSlice.reducer;
