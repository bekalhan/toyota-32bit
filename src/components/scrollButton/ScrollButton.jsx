import React from 'react';
import '../../index.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';

function ScrollButton({name,anc}) {

    const scrollTopToBottom = () =>{
        const element = document.getElementById(anc);
        element.scrollTop += 30;
      }
  
      const scrollBottomToTop = () =>{
        const element = document.getElementById(anc);
        element.scrollTop -= 30;
      }

  return (
    <Box sx={{width:'100%',backgroundColor:'#c5ffc4',height:'80px'}} backgroundColor={name==="errorList" ? 'red' : '#c5ffc4'}>
        <Box sx={{width:'100%',height:'50%',display:'flex',justifyContent:'center',border:'0.8px solid black',textAlign:'center',padding:'0.5em'}} backgroundColor={name==="errorList" ? '#d41823' : '#c5ffc4'} color={name==="errorList" ? 'white' : 'black'} borderRadius={name==="errorList" ? '8px 8px 0 0 ' : null} onClick={()=>scrollBottomToTop()}>
            <KeyboardArrowUpIcon sx={{marginTop:'0.3em'}} />
        </Box>
        <Box sx={{width:'100%',height:'50%',display:'flex',justifyContent:'center',border:'0.8px solid black',textAlign:'center',padding:'0.5em'}} backgroundColor={name==="errorList" ? '#d41823' : '#c5ffc4'} color={name==="errorList" ? 'white' : 'black'} borderRadius={name==="errorList" ? '0 0 8px 8px ' : null} onClick={()=>scrollTopToBottom()}>
            <KeyboardArrowDownIcon sx={{marginTop:'0.3em'}} />
        </Box>
    </Box>
  )
}

export default ScrollButton