import React,{useState,useRef} from 'react';
import Inputs from './inputs/Inputs';
import TerminalList from './terminal/TerminalList';

function Form({formik}) {
  return (
    <>
        <TerminalList />
        <Inputs formik={formik} />
    </>
  )
}

export default Form