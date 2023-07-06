import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDefectDataList = createAsyncThunk("/defect-list",async () =>{
    try{
        const data = await axios.get(`/defect-list`);
        let list = data?.data?.Response?.data[0];
        return list;
    }catch(error){
        if(!error.response) throw error;
    }
});


const defectList = createSlice({
    name:'defectList',
    initialState:{
        defectList:[],
        count:-1,
        searchBody:'',
        searchAssy:''
    },
    reducers:{
      incCount(state){
        state.count += 1;
      },
      searchBody(state,action){
        state.searchBody = action.payload;
      },
      searchAssy(state,action){
        state.searchAssy = action.payload;
      }
    },
    extraReducers : builder =>{
    //get error data
    builder.addCase(getDefectDataList.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getDefectDataList.fulfilled, (state, action) => {
        state.defectList = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(getDefectDataList.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
    }
});

export default defectList.reducer;
export const {incCount,searchBody,searchAssy} = defectList.actions

