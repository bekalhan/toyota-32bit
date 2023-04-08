import React from 'react';
import Header from './partial/Header';
import Body from './partial/Body';
import {Table,TableContainer,Paper} from '@mui/material';

function TableComp() {
  return (
    <TableContainer sx={{backgroundColor:'#c6ffc7',overflow:'auto',height:'100%'}} component={Paper}> 
    <Table   aria-label="simple table">
      <Header />
      <Body />
    </Table>
  </TableContainer>
  )
}

export default TableComp