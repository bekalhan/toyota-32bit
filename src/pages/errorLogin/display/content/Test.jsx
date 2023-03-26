import React from 'react';
import {
  Avatar,
    Box
} from '@mui/material';
import indication from '../../../../img/ind.gif';

function Test() {
  return (
    <Box
    sx={{
        width:'400px',
        height:'400px',
        backgroundColor:'gray',
        padding:'40px'
    }}
    >
    <Avatar
    variant='square'
    src={indication}
    sx={{border:'transparent',transform:'rotate(-45deg)',border:'2px transparent #000',marginLeft:'100px'}}
    />
    </Box>
  )
}

export default Test