import { Avatar,Box,Typography } from '@mui/material'
import React from 'react';
import car from '../../../../img/car4.jpg';
import { useDispatch , useSelector} from "react-redux";
import { useEffect } from 'react';
import {getErrors} from '../../../../redux/slices/errorSlices';
import Loading from '../../../../utils/loading/Loading';

function Model() {
      //redux requirements
  const dispatch = useDispatch();
  const error = useSelector(store => store?.error);
  const {errors,loading} = error;

  //react hooks
  useEffect(()=>{
    dispatch(getErrors());
  },[]);

  console.log("errors :",loading);

  return (
    loading ? <Loading />: 
    <Box sx={{overflowX:'scroll',width:'100%',height:'600px',position:'relative'}}>
     <Avatar
     variant='square'
     src={car}
     sx={{width:'915px',height:'700px',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'
     ,backgroundPosition:'center',backgroundSize:'cover',position:'absolute'     
    }}
     />
     {errors?.data?.Response?.data[0].defectButtonRecords?.map((e)=>(
           <Box sx={{position:'absolute',borderRadius:'8px',border:`5px solid ${e.boxColor}`,
           justifyContent:'center',
        }}
           height={e.boxHeight}
           width={e.boxWidth}
           left={e.boxX+20} top={e.boxY}>
               <Typography sx={{maxWidth:'100%',backgroundColor:'white',color:`${e.labelColor}`,fontSize:'11px',display:'flex',justifyContent:'center'}}>{e.labelText}</Typography>
           </Box>
     ))}
    </Box>
  )
}

export default Model