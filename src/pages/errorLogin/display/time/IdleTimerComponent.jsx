import React,{useEffect,useState} from 'react';
import {useTime} from '../../../../hooks/useTime';

function IdleTimerComponent() {
  

  let inactivity = useTime(10);

  console.log("inactivity : ",inactivity);


  return (
    <>
      {inactivity===true ? (
        <h1>online</h1>
      ):(<h1>offline</h1>)}
    </>
  )
}

export default IdleTimerComponent;