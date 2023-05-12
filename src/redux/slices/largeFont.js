import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getFontData = createAsyncThunk("/font",async () =>{
    try{
        const data = await axios.get(`/font-data`);
        return data;
    }catch(error){
        if(!error.response) throw error;
    }
});

const fontSlice = createSlice({
    name:'font',
    initialState:{
        fontData: [],
        largeFont:false
    },
    reducers:{
      changeFontStatus(state){
        if(state.largeFont===false){
          state.largeFont = true;
        }else{
          state.largeFont=false;
        }
      }
    },
    extraReducers : builder => {
    //get font data
    builder.addCase(getFontData.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getFontData.fulfilled, (state, action) => {
        state.fontData = action?.payload?.data;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(getFontData.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
    }
});

export default fontSlice.reducer;
export const { changeFontStatus } = fontSlice.actions


