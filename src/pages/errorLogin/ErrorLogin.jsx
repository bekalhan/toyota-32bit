import React from 'react';
import {
    Box,Grid
} from '@mui/material';
import HeaderData from './headerdata/HeaderData';
import Model from './display/content/Model';
import Buttons from './display/buttons/Buttons';
import ButtomButtons from './buttomButtons/ButtomButtons';

function ErrorLogin() {
  return (
    <Box sx={{display:'flex',backgroundColor:'#c6ffc7',height:'780px'}}>
        <Grid container sx={{display:'flex',justifyContent:'center'}}>
            <Grid item lg={10} md={12} sm={12} xs={12} sx={{border:'2px solid #b7ecba',borderRadius:'10px'}}>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <HeaderData />
                    </Grid>
                    <Grid item lg={12} sx={{width:'100%'}}>
                        <Grid container>
                            <Grid item lg={9.3} md={9.5} sm={12} xs={12}>
                                <Model />
                            </Grid>
                            <Grid item lg={2.7} md={2.5} sm={12} xs={12} >
                                <Buttons />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={9.3} md={9.5} sm={12} xs={12}>
                        <ButtomButtons />
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Grid container>
                        <Grid item lg={2} md={2}>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ErrorLogin