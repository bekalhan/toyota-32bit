import React,{useState,useEffect} from 'react';
import {
    Avatar,Box,Typography
} from '@mui/material';
import car from '../../../../../img/car10.jpeg';
import { Line } from 'react-lineto';
import MenuItems from './MenuItems';



function ChoosedError({error,defects}) {
  const [control,setControl] = useState(false);
  const [move,setMove] = useState({"x":0,"y":0});
  const [line,setLine] = useState({"x":0,"y":0});
  const [err,setErr] = useState({"x":0,"y":0});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [defectsSc,setDefectsSc] = useState(false);
  const [space,setSpace] = useState({"x":0,"y":0});
  const open = Boolean(anchorEl);

  const handleMove = (e) =>{
    e.preventDefault();
    if(!control){
        setMove({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY});
    }
    let corX = e.clientX - e.nativeEvent.offsetX;
    let corY = e.clientY - e.nativeEvent.offsetY;
    setLine({x:corX,y:corY});
    handleError();
  }

  const handleMoveAllScreen = (e) =>{
    e.preventDefault();
    if(!control){
      let corX = e.clientX - e.nativeEvent.offsetX;
      let corY = e.clientY - e.nativeEvent.offsetY;
      setLine({x:corX,y:corY});
      handleError();
    }
  }

  const handleClick = (event) => {
    setControl(true);
    setDefectsSc(true);
    //setAnchorEl(event.currentTarget);
  }

  const handleMenuClick = (event) => {
    if(defectsSc){
      setAnchorEl(event.currentTarget);
    }
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log("y : ",error);

  //useEffect
  useEffect(()=>{
    handleError();
  },[control,line]);

  const handleError = () => {
    let corX = line.x + error.boxX + (error.boxWidth/2);
    let corY = line.y + error.boxY + (error.boxHeight/2);
    setErr({x:corX+15,y:corY+10});
    setSpace({x:error.boxX,y:error.boxY});
  }

  return (
  <Box sx={{overflowX:'scroll',width:'100%',height:'600px',position:'relative'}} onMouseMove={(e)=>handleMoveAllScreen(e)}  
  >
    <Avatar
     variant='square'
     src={car}
     sx={{width:'915px',height:'700px',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'
     ,backgroundPosition:'center',backgroundSize:'cover',zIndex:1,position:'absolute'   
    }}
    onMouseMove={(e)=>handleMove(e)}  
    onClick={()=>handleClick()}
     />
     {/* added line in the screen */}
    {control?(
     <Box sx={{position:'fixed'}}>
         <Line x0={err.x} y0={err.y} x1={line.x+move.x} y1={line.y+move.y} />
     </Box>
    ):null}
     {/* the defect which has been choosed */}
     <Box sx={{borderRadius:'8px',border:`5px solid red`,
             position:'absolute',
            justifyContent:'center',
            cursor:'pointer',
            overflowX:'scroll',
            zIndex:2
            }}
            height={error.boxHeight}
            width={error.boxWidth}
            left={error.boxX+20} top={error.boxY}
            onClick={handleMenuClick}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            >
           <Typography sx={{maxWidth:'100%',backgroundColor:'white',color:'red',fontSize:'11px',display:'flex',justifyContent:'center'}}>{error.labelText}</Typography>
     </Box>
     {/* menu items  */}
      <MenuItems
        defectSc={defectsSc}
        anchorEl={anchorEl}
        defects={defects} 
        error={error}
        />

   </Box>
  )
}

export default ChoosedError