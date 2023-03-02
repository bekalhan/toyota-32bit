import React, { Component } from 'react';
import {Avatar, Box} from '@mui/material';
import {NavLink} from 'react-router-dom';
import notfound from '../../img/notfound.png'


export default class NotFound extends Component {
  render() {
    return (
        <Box sx={{display:"flex",justifyContent:"center"}}>
        <NavLink to="/cvqsterminal/terminals" sx={{display:"flex",justifyContent:"center",backgroundColor:"red"}}>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Avatar
                sx={{marginTop:"5rem",width:"80%",height:"80%",display:"flex",justifyContent:"center"}}
                variant='square' src={notfound} />
        </Box>
        </NavLink>
    </Box>
    )
  }
}
