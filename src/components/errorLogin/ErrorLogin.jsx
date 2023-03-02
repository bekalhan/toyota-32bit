import React from 'react';
import { useEffect } from 'react';
import {
    Grid , Box, Typography , Stack, Avatar , Button ,TextField , Checkbox ,FormGroup , FormControlLabel
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import car from '../../img/car.png';
import Header from './header/Header';
import Model from './content/model/Model';
import Buttons from './content/buttons/Buttons';


function ErrorLogin() {

  return (
    <Box sx={{display:'flex',backgroundColor:'#c6ffc7',height:'1800px'}}>
        <Grid container sx={{display:'flex',justifyContent:'center'}}>
            <Grid item lg={10} md={12} sm={12} xs={12} sx={{borderRadius:'12px',display:'flex',height:'850px'}}>
                <Grid container sx={{display:'flex',justifyContent:'center'}}>
                     <Header />
                    <Model  />
                    <Buttons />
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ErrorLogin