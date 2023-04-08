import { Box } from '@mui/material';
import React from 'react';
import TableComp from './table/TableComp';
import BottomBar from './bottom/BottomBar';

function ErrorList() {

  return (
    <Box sx={{height:'100%'}}>
      <Box sx={{height:'80%'}}>
         <TableComp />
      </Box>
      <Box sx={{backgroundColor:'white',height:'20%',overflow:'auto'}}>
          <BottomBar />
      </Box>
    </Box>
  )
}

export default ErrorList;