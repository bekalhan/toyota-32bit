import React,{useState,useEffect} from 'react';
import {
    Avatar,Box,Typography
} from '@mui/material';
import car from '../../../../../img/car10.jpeg';
import errlocat from '../../../../../img/errlocat.gif';
import { Line } from 'react-lineto';
import MenuItems from './MenuItems';
import {useDispatch} from "react-redux";
import {
  changeErrorName
} from '../../../../../redux/slices/errorSlices';
import { useRedux } from '../../../../../hooks/useRedux';

function ChoosedError({error,defects}) {
  const [control,setControl] = useState(false);
  const [move,setMove] = useState({"x":0,"y":0});
  const [line,setLine] = useState({"x":0,"y":0});
  const [err,setErr] = useState({"x":0,"y":0});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [defectsSc,setDefectsSc] = useState(false);
  const open = Boolean(anchorEl);

  //dispatch
  const dispatch = useDispatch();

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
  }

  const handleMenuClick = (event) => {
    dispatch(changeErrorName(error?.labelText));
    if(defectsSc){
      setAnchorEl(event.currentTarget);
    }
  }

  //useEffect
  useEffect(()=>{
    handleError();
  },[control,line]);

  const handleError = () => {
    let corX = line.x + error.boxX + (error.boxWidth/2);
    let corY = line.y + error.boxY + (error.boxHeight/2);
    setErr({x:corX+15,y:corY+10});
  }

  let choosedError = useRedux({name:"error",data:"choosedError"});

  return (
    <>
      <Box sx={{overflow:'auto',width:'100%',height:'600px',position:'relative'}} onMouseMove={(e)=>handleMoveAllScreen(e)}  
      >
    <Avatar
     variant='square'
     src={car}
     sx={{width:'915px',height:'700px',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'
     ,backgroundPosition:'center',backgroundSize:'cover',position:'absolute'
    }}
    onMouseMove={(e)=>handleMove(e)}  
    onClick={()=>handleClick()}
     />
     {/* added line in the screen */}
    {control && choosedError===undefined ? (
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
    {/* error locat indication  */}
    {choosedError !== undefined ? (
        <Avatar
        src={errlocat}
        sx={{
          position: 'absolute',
          marginLeft:`${move.x-10}px`,
          marginTop:`${move.y-10}px`
        }}
        /> 
    ):null}
   </Box>
    {/* menu items  */}
   <MenuItems
        defectSc={defectsSc}
        anchorEl={anchorEl}
        defects={defects} 
        error={error}
        setAnchor={setAnchorEl}
        setControl={setControl}
        />
    </>
  )
}
export default ChoosedError;