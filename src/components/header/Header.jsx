import React from 'react';
import {
    AppBar,Toolbar,Stack, Box, Typography
  } from '@mui/material';
  import DrawerMenu from '../../utils/DrawerMenu';
  import {Outlet} from 'react-router-dom';


function Header() {
  return (
    <>
        <AppBar position='relative'>
          <Toolbar sx={{display:'flex',justifyContent:{lg:'space-between',md:'space-between',sm:'space-between',xs:'center'},backgroundColor:'#c6ffc7'}}>
              <Stack direction='column' sx={{justifyContent:'center'}}>
                <Typography sx={{color:'black',fontSize:{lg:'22px',md:'20px',sm:'18px',xs:'22px'},marginTop:{xs:'0.3em'}}}>
                  Complete Vehicle Quality
                </Typography>
                <Box sx={{display:'flex',justifyContent:'center',marginTop:'0.3em',marginBottom:'0.3em'}}>
                  <DrawerMenu />
                </Box>
              </Stack>
              <Stack direction="row" sx={{color:'red',display:{lg:'flex',md:'flex',sm:'flex',xs:'none'}}}>
                <Box><Typography sx={{fontSize:{lg:'13px',md:'12px',sm:'11px'}}}>YARDIM</Typography></Box>
                <Box sx={{marginLeft:'1em'}}><Typography sx={{fontSize:{lg:'13px',md:'12px',sm:'11px'}}}>ANA SAYFA</Typography></Box>
                <Box sx={{marginLeft:'1em'}}><Typography sx={{fontSize:{lg:'13px',md:'12px',sm:'11px'}}}>DESTEK</Typography></Box>
              </Stack>
          </Toolbar>
      </AppBar>
      <Outlet />
  </>
  )
}

export default Header