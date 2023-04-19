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
import '../../../../../index.css';

function Test({error,defects}) {
    const [point,setPoint] = useState({x:"",y:"",offx:"",offy:""});
    const [ind,setInd] = useState({x:"",y:"",offx:"",offy:""});

    const [scroll,setScroll] = useState({left:0,top:0});
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
        setPoint({x:e.pageX,y:e.nativeEvent.layerY,offx:(e.pageX - e.nativeEvent.offsetX),offy:(e.pageY - e.nativeEvent.offsetY)});
        setInd({x:e.pageX,y:e.pageY,offx:(e.pageX - e.nativeEvent.offsetX),offy:(e.pageY - e.nativeEvent.offsetY)});
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
  let allScroll = useRedux({name:"error",data:"scroll"});

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
     {point.x !== "" && choosedError === undefined && clean === false? (
      <>
          <Line x0={point.offx+error.boxX+60 - scroll.left - allScroll.x} y0={(218-allScroll.y) + error.boxY + 50 - scroll.top } x1={point.x - scroll.left - allScroll.x} y1={point.y+210-allScroll.y-scroll.top} className='line' />
          <Line x0={point.offx+error.boxX+60 - scroll.left - allScroll.x} y0={(60-allScroll.y) + error.boxY + 50 - scroll.top } x1={point.x - scroll.left - allScroll.x} y1={point.y+60-allScroll.y-scroll.top} className='line2' />
      </>
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
        <Avatar src={errlocat} sx={{position: 'absolute',marginLeft:`${ind.x-scroll.left-ind.offx}px`,marginTop:`${ind.y-scroll.top-ind.offy}px`}}/> 
    ):null}
    </Box>
        {/* menu ıtems */}
        <MenuItems
        anchorEl={anchorEl}
        defects={defects} 
        error={error}
        scroll={scroll}
        x={point.x}
        allScroll={allScroll}
        />
    </>
  )
}
export default Test;