import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDefectData = createAsyncThunk("/defect",async () =>{
    try{
        const data = await axios.get(`/defect-data`);
        return data;
    }catch(error){
        if(!error.response) throw error;
    }
});

export const getDefects = createAsyncThunk("/defects",async () =>{
    try{
        const data = await axios.get(`/defect-photo`);
        return data;
    }catch(error){
        if(!error.response) throw error;
    }
});

export const getDefectButtonData = createAsyncThunk("/defect-button",async ()=>{
  try{
    const data = await axios.get('/defect-button');
    return data;
  }catch(error){
    if(!error.response) throw error;
  }
});

export const getDefectButtonData2 = createAsyncThunk("/defect-button2",async ()=>{
  try{
    const data = await axios.get('/defect-button2');
    return data;
  }catch(error){
    if(!error.response) throw error;
  }
});


export const getDefectsByNames = createAsyncThunk("/defect-choosed",async ()=>{
  try{
    const data = await axios.get('/defect-choosed');
    return data;
  }catch(error){
    if(!error.response) throw error;
  }
});

const defectSlice = createSlice({
    name:'defect',
    initialState:{
        defectData : '',
        defects : [],
        boxData:[],
        defectButtonData : [],
        defectButtonData2 : [],
        //for choosed box
        choosedError : undefined,
        //for bottom text
        defectName:undefined,
        //for right buttons 
        clickDefect:undefined,
        //for inactivity red background
        status:true,
        //for clean chooses error
        clean:false,
        //for when click the error
        click:false,
        //for all page scroll
        scroll:{x:0,y:0}
    },
    reducers:{
      changeDefect(state,action){
        state.choosedDefect = action.payload;
      },
      changeDefectName(state,action){
        state.defectName = action.payload;
      },
      changeChoosedDefect(state,action){
        state.clickDefect = action.payload;
      },
      changeClean(state){
        if(state.clean){
          state.clean = false;
        }else{
          state.clean = true;
        }
      },
      changeClick(state){
        if(state.click){
          state.click = false;
        }else{
          state.click = true;
        }
      },
      changeScroll(state,action){
        state.scroll.x = action.payload.left;
        state.scroll.y = action.payload.top;
      }
    },
    extraReducers: builder =>{
    //get error data
    builder.addCase(getDefectData.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getDefectData.fulfilled, (state, action) => {
        state.defectData = action?.payload?.data;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(getDefectData.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
    //get errors
    builder.addCase(getDefects.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getDefects.fulfilled, (state, action) => {
        state.defects = action?.payload?.data;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(getDefects.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
    //get button data
    builder.addCase(getDefectButtonData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getDefectButtonData.fulfilled, (state, action) => {
      state.defectButtonData = action?.payload?.data;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(getDefectButtonData.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
        //get button data2
        builder.addCase(getDefectButtonData2.pending, (state, action) => {
          state.loading = true;
        });
        builder.addCase(getDefectButtonData2.fulfilled, (state, action) => {
          state.defectButtonData2 = action?.payload?.data;
          state.loading = false;
          state.appErr = undefined;
          state.serverErr = undefined;
        });
        builder.addCase(getDefectButtonData2.rejected, (state, action) => {
          state.loading = false;
          state.appErr = action?.payload?.message;
          state.serverErr = action?.error?.message;
        });
                builder.addCase(getDefectsByNames.pending, (state, action) => {
                  state.loading = false;
                });
                builder.addCase(getDefectsByNames.fulfilled, (state, action) => {
                  state.boxData = action?.payload?.data;
                  state.loading = false;
                  state.appErr = undefined;
                  state.serverErr = undefined;
                });
                builder.addCase(getDefectsByNames.rejected, (state, action) => {
                  state.loading = false;
                  state.appErr = action?.payload?.message;
                  state.serverErr = action?.error?.message;
                });
    }
});

export default defectSlice.reducer;
export const { changeDefect , changeDefectName , changeChoosedDefect , changeClean , changeClick , changeScroll} = defectSlice.actions
