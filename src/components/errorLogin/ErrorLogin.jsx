import React from 'react';
import {
    Box,Grid
} from '@mui/material';
import HeaderData from './headerdata/HeaderData';


function ErrorLogin() {
  return (
    <Box sx={{display:'flex',backgroundColor:'#c6ffc7',height:'1800px'}}>
        <Grid container sx={{display:'flex',justifyContent:'center'}}>
            <Grid item lg={8} md={10} sm={12} xs={12} sx={{border:'2px solid #b7ecba',borderRadius:'10px'}}>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <HeaderData />
                    </Grid>
                    <Grid item lg={12}>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ErrorLogin