import React,{useState,useRef,useEffect} from 'react';
import {
    Avatar,Box,Typography
} from '@mui/material';
import car from '../../../../img/car10.jpeg';
import { Line } from 'react-lineto';


function ChoosedError({error}) {
  const [control,setControl] = useState(false);
  const [move,setMove] = useState({"x":0,"y":0});
  const [line,setLine] = useState({"x":0,"y":0});
  const [err,setErr] = useState({"x":0,"y":0});


  const handleMove = (e) =>{
    console.log("eee :",e.clientX);
    if(!control){
        let corX = e.clientX - e.nativeEvent.offsetX;
        let corY = e.clientY - e.nativeEvent.offsetY;
        setLine({x:corX,y:corY});
        setMove({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY});
    }
  }

  console.log("object :",error);

  const handleClick = () => {
    setControl(true);
  }

  //useEffect
  useEffect(()=>{
    handleError();
  },[control]);

  const handleError = () => {
    let corX = line.x + error.boxX + (error.boxWidth/2);
    let corY = line.y + error.boxY + (error.boxHeight/2);
    setErr({x:corX+15,y:corY+10});
  }

  return (
    <Box sx={{overflowX:'scroll',width:'100%',height:'600px',position:'relative'}}>
    <Avatar
    variant='square'
    src={car}
    sx={{width:'915px',height:'700px',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'
    ,backgroundPosition:'center',backgroundSize:'cover',position:'absolute'   
   }}
   onMouseMove={(e)=>handleMove(e)}  
   onClick={()=>handleClick()}
    />
    {control?(
      <Line x0={err.x} y0={err.y} x1={line.x+move.x} y1={line.y+move.y} />
    ):null}
    <Box sx={{position:'absolute',borderRadius:'8px',border:`5px solid red`,
           justifyContent:'center',
           cursor:'pointer'
           }}
           height={error.boxHeight}
           width={error.boxWidth}
           left={error.boxX+20} top={error.boxY}
           >
               <Typography sx={{maxWidth:'100%',backgroundColor:'white',color:'red',fontSize:'11px',display:'flex',justifyContent:'center'}}>{error.labelText}</Typography>
    </Box>
   </Box> 
  )
}

export default ChoosedError