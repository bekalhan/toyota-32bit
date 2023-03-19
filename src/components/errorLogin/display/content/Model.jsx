import { Avatar,Box,Typography,Select,OutlinedInput,MenuItem } from '@mui/material'
import React, { useState } from 'react';
import car from '../../../../img/car4.jpg';
import { useDispatch , useSelector} from "react-redux";
import { useEffect } from 'react';
import {getErrors} from '../../../../redux/slices/errorSlices';
import Loading from '../../../../utils/loading/Loading';
import ChoosedError from './clickedError/ChoosedError';

function Model() {
  //react useState
  const [click,setClick] = useState(false);
  const [clickedError,setClickedError] = useState([]);
  //redux requirements
  const dispatch = useDispatch();
  const error = useSelector(store => store?.error);
  const {errors,loading} = error;

  //react hooks
  useEffect(()=>{
    dispatch(getErrors());
  },[]);

  const handleClick = (childNum,error) => {
    if(childNum!==0){
      setClick(true);
      setClickedError(error);
    }
  }

  console.log("aaa :",errors?.data?.Response?.data[0].partDefects)

  return (
    loading ? <Loading />: 
    click ? <ChoosedError error={clickedError} defects={errors?.data?.Response?.data[0].partDefects} /> :
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
           cursor:'pointer'
           }}
           height={e.boxHeight}
           width={e.boxWidth}
           left={e.boxX+20} top={e.boxY}
           onClick={()=>handleClick(e.childPicID,e)}
           >
               <Typography sx={{maxWidth:'100%',backgroundColor:'white',color:`${e.labelColor}`,fontSize:'11px',display:'flex',justifyContent:'center'}}>{e.labelText}</Typography>
           </Box>
     ))}
    </Box> 
  )
}

export default Model