import { Box, Typography } from '@mui/material';
import React from 'react';
import BottomBar from './bottom/BottomBar';
import {useRedux} from '../../hooks/useRedux';
import {getErrorDataList} from '../../redux/slices/errorList';
import Main from './table/main';

function ErrorList() {

  let list = useRedux({name:"errorList",data:"errorList",slice:getErrorDataList()});  

  return (
    <Box sx={{height:'100%'}}>
      <Box sx={{height:'77%'}}>
          <Main />
      </Box>
      <Box sx={{height:'3%',backgroundColor:'#c6ffc7',border:'1px solid black',display:'flex',justifyContent:'flex-end'}}>
          <Typography sx={{fontSize:'15px',marginRight:'1em'}}>Total rows : {list?.defectList?.length}</Typography>
      </Box>
      <Box sx={{backgroundColor:'white',height:'20%',overflow:'auto'}}>
          <BottomBar />
      </Box>
    </Box>
  )
}

export default ErrorList;