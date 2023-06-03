import React from 'react';
import { getTerminalList } from "../../redux/slices/terminalSlices";
import TerminalGrid from './terminalGrid/TerminalGrid';
import Header from '../header/Header';
import {useRedux} from '../../hooks/useRedux';
import ScrollTop from '../../components/scrollTop/ScrollTop';


function TerminalList() {
    //get terminal list using custom redux hook
    const list = useRedux({name:"terminals",data:"terminalList",slice:getTerminalList()});
  return (
    <>
     <ScrollTop />
      <Header />
      <TerminalGrid terminalList={list?.Response?.data} />
    </>
  )
}
export default TerminalList;