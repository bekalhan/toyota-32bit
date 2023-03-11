import React,{useState} from 'react';
import {
    Avatar,Box,Typography
} from '@mui/material';
import car from '../../../../img/car10.jpeg';



function ChoosedError({error}) {
  const [control,setControl] = useState(false);
  const [move,setMove] = useState({"x":0,"y":0});

  const handleMove = (e) =>{
    if(!control){
        setMove({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY});
    }
  }

  const handleClick = () => {
    setControl(true);
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
      <Box sx={{position:'absolute',borderRadius:'8px',border:`5px solid red`,
        justifyContent:'center',
        cursor:'pointer'
        }}
        height="20px"
        width="20px"
        left={move.x} top={move.y}
        >
    </Box>
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