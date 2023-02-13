import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const getTerminalList =  createAsyncThunk("/terminal-list",async ()=>{
    try{
        const data = await axios.get(`/terminal-list`);
        return data;
    }catch(error){
        if (!error?.response) throw error;
    }
});

export const getSpeTerminal = createAsyncThunk("/spe-terminal",async (info)=>{
  try{
    const data = await axios.get(`/${info.depcode}/${info.filtercode}`);
    console.log("dataaa :",data);
    return data;
  }catch(error){
    if(!error.response) throw error;
  }
});

const terminalSlice = createSlice({
    name:'terminal',
    initialState:{
        terminalList : []
    },
    extraReducers : builder =>{
    //get terminal list
    builder.addCase(getTerminalList.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getTerminalList.fulfilled, (state, action) => {
        state.terminalList = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(getTerminalList.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
      //get specific terminal
      builder.addCase(getSpeTerminal.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getSpeTerminal.fulfilled, (state, action) => {
        state.terminal = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(getSpeTerminal.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });

    }
});

export default terminalSlice.reducer;