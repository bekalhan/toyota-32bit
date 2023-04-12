import React from 'react';
import { Box , Avatar , Typography } from '@mui/material';
import car from '../../../../../img/car10.jpeg';
import { Line } from 'react-lineto';
import { useState } from 'react';
import { useRedux } from '../../../../../hooks/useRedux';
import MenuItems from './MenuItems';
import { useDispatch } from 'react-redux';
import {changeErrorName , changeClean} from '../../../../../redux/slices/errorSlices';
import errlocat from '../../../../../img/errlocat.gif';
import '../../../../../index.css';
import { useEffect } from 'react';

function Test({error,defects}) {
    const [point,setPoint] = useState({x:"",y:"",offx:"",offy:""});
    const [scroll,setScroll] = useState({left:"",top:""});
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    //dipatch
  const dispatch = useDispatch();


  useEffect(()=>{
    if(point.x !== ""  && clean) {
      setTimeout(()=>{
        setPoint({x:"",y:"",offsetX:"",offsetY:""});
        setAnchorEl(null);
        dispatch(changeClean());
      },1000);
    }
  })


  const handleClick = (e) => {
    if(point.x === ""){
        setPoint({x:e.pageX,y:e.pageY,offx:(e.pageX - e.nativeEvent.offsetX),offy:(e.pageY - e.nativeEvent.offsetY)});
    }
  }

  const handleScroll = (event) => {
    setScroll({left:event.currentTarget.scrollLeft,top:event.currentTarget.scrollTop});
  }

  const handleMenuClick = (event) => {
    if(point.x !== ""){
      dispatch(changeErrorName(error?.labelText));
      setAnchorEl(event.currentTarget);
    }
  }

  let choosedError = useRedux({name:"error",data:"choosedError"});
  let clean = useRedux({name:"error",data:"clean"});

  return (
    <>
     <Box sx={{overflow:'auto',width:'100%',height:'600px',position:'relative'}} onScroll={handleScroll}>
    {/* add picture */}
    <Avatar variant='square' src={car}
      sx={{width:'915px',height:'700px',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'
     ,backgroundPosition:'center',backgroundSize:'cover',position:'absolute'
    }}
    className='pic2'
    onClick={handleClick}
     />
    {/* add line according to choosed coordinates */}
     {point.x !== "" && choosedError === undefined && clean === false ? (
          <Line x0={point.offx+error.boxX+60 - scroll.left} y0={point.offy + error.boxY + 50 - scroll.top} x1={point.x - scroll.left} y1={point.y-scroll.top} />
     ):null}
     {/* print choosed error */}
    <Box sx={{borderRadius:'8px',border:`3px solid red`,position:'absolute',justifyContent:'center',cursor:'pointer',overflowX:'scroll',}}
            height={error.boxHeight} width={error.boxWidth} left={error.boxX+20} top={error.boxY}
            onClick={handleMenuClick}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            >
           <Typography sx={{maxWidth:'100%',backgroundColor:'white',color:'red',fontSize:'11px',display:'flex',justifyContent:'center'}}>{error.labelText}</Typography>
    </Box>
        {/* error locat indication  */}
        {choosedError !== undefined  && point.x !== "" ? (
        <Avatar
        src={errlocat}
        sx={{
          position: 'absolute',
          marginLeft:`${point.x-scroll.left-point.offx}px`,
          marginTop:`${point.y-scroll.top-point.offy}px`
        }}
        /> 
    ):null}
    </Box>
        {/* menu ıtems */}
        <MenuItems
        anchorEl={anchorEl}
        defects={defects} 
        error={error}
        setAnchor={setAnchorEl}
        scroll={scroll}
        x={point.x}
        />
    </>

  )
}
export default Test;