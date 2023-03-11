import React from 'react';
import {
    Avatar,Box,Typography
} from '@mui/material';
import car from '../../../../img/car10.jpeg';



function ChoosedError({error}) {
  return (
    <Box sx={{overflowX:'scroll',width:'100%',height:'600px',position:'relative'}}>
    <Avatar
    variant='square'
    src={car}
    sx={{width:'915px',height:'700px',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'
    ,backgroundPosition:'center',backgroundSize:'cover',position:'absolute'     
   }}
    />
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