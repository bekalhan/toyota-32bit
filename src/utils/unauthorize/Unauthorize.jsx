import React from 'react';
import unauthorize from '../../img/unauthorize.gif';
import {Avatar,Box,Stack} from '@mui/material';
import {NavLink} from 'react-router-dom';


function Unauthorize() {
  return (
    <Stack direction="column">
        <NavLink to="/cvqsterminal/terminals">
        <Box sx={{display:'flex',justifyContent:'center',}}>
        <Avatar
        variant='square'
        src={unauthorize}
        sx={{height:'auto',width:'50%',marginTop:'4rem'}}
        />
        </Box>
        </NavLink>
    </Stack>

  )
}

export default Unauthorize