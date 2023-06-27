import { Avatar,Box,Typography} from '@mui/material'
import React, { useState } from 'react';
import car from '../../../../img/car4.jpg';
import {getDefects,changeChoosedDefect,changeClick} from '../../../../redux/slices/defectSlices';
import Loading from '../../../../utils/loading/Loading';
import ChoosedDefect from './clickedDefect/ChoosedDefect';
import {useRedux} from '../../../../hooks/useRedux';
import '../../../../index.css';
import { useDispatch } from 'react-redux';


function Model() {
  //react useState
  const [clickedDefect,setClickedDefect] = useState([]);
  
  //dispatch
  const dispatch = useDispatch();

  const handleClick = (childNum,defect) => {
    dispatch(changeChoosedDefect(defect.labelText));
    if(childNum!==0){
      dispatch(changeClick());
      setClickedDefect(defect);
    }
  }

  //use redux custom hook
   let obj = useRedux({name:"defect",data:["defects","loading","click"],slice:getDefects()});
   let defects = obj[0];
   let loading = obj[1];
   let clicked = obj[2];   
  
  return (
    loading ? <Loading />: 
    clicked ?
    <>
        {/* IF DEFECT HAS BEEN CHOOSED */}
        <ChoosedDefect defect={clickedDefect} defects={defects?.Response?.data[0].partDefects} /> 

    </> 
:

    <Box sx={{overflowX:'scroll',width:'100%',height:'600px',position:'relative'}}>
      {/* DUMMY PICTURE WİTH DATAS */}
     <Avatar
     variant='square'
     src={car}
     sx={{width:'915px',height:'700px',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'
     ,backgroundPosition:'center',backgroundSize:'cover',position:'absolute'     
    }}
    className='pic2'
     />
     {defects?.Response?.data[0].defectButtonRecords?.map((e,index)=>(
           <Box sx={{position:'absolute',borderRadius:'8px',border:`3px solid ${e.boxColor}`,
           justifyContent:'center',
           cursor:'pointer'
           }}
           height={e.boxHeight}
           width={e.boxWidth}
           left={e.boxX+20} top={e.boxY}
           onClick={()=>handleClick(e.childPicID,e)}
           key={index}
           >
               <Typography sx={{maxWidth:'100%',backgroundColor:'white',color:`${e.labelColor}`,fontSize:'11px',display:'flex',justifyContent:'center'}}>{e.labelText}</Typography>
           </Box>
     ))}
    </Box> 
  )
}
export default Model;