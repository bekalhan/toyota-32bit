import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTerminalList } from "../../redux/slices/terminalSlices";
import TerminalGrid from './terminalGrid/TerminalGrid';
import Header from '../header/Header';

function TerminalList() {
    //redux requirements
    const dispatch = useDispatch();
    const store = useSelector(state => state?.terminals);
    const {terminalList} = store;

    //react hooks
    useEffect(()=>{
        dispatch(getTerminalList());
    },[]);
    
  return (
    <>
      <Header />
      <TerminalGrid terminalList={terminalList?.data?.Response?.data} />
    </>
  )
}

export default TerminalList;