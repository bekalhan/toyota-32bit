import React from 'react';
import { getTerminalList } from "../../redux/slices/terminalSlices";
import TerminalGrid from './terminalGrid/TerminalGrid';
import Header from '../header/Header';
import {useRedux} from '../../hooks/useRedux';

function TerminalList() {
    //custom
    const list = useRedux({name:"terminals",data:"terminalList",slice:getTerminalList()});
  return (
    <>
      <Header />
      <TerminalGrid terminalList={list?.data?.Response?.data} />
    </>
  )
}
export default TerminalList;