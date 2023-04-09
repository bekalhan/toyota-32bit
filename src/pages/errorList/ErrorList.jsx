import { Box, Typography } from '@mui/material';
import React from 'react';
import TableComp from './table/TableComp';
import BottomBar from './bottom/BottomBar';
import {useRedux} from '../../hooks/useRedux';
import {getErrorDataList} from '../../redux/slices/errorList';

function ErrorList() {

  let list = useRedux({name:"errorList",data:"errorList",slice:getErrorDataList()});  

  return (
    <Box sx={{height:'100%'}}>
      <Box sx={{height:'77%'}}>
          <TableComp list={list} />
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