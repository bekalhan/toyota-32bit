import React from 'react';
import { useEffect } from 'react';
import {
    Grid , Box, Typography , Stack, Avatar , Button ,TextField , Checkbox ,FormGroup , FormControlLabel
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getErrorData ,getErrors } from "../../redux/slices/errorSlices";
import car from '../../img/car.png';
import Header from './header/Header';
import { useDispatch, useSelector } from "react-redux";
import Model from './content/model/Model';
import Buttons from './content/buttons/Buttons';


function ErrorLogin() {
    //redux requirements
    const dispatch = useDispatch();
    const store = useSelector(state => state?.error);
    const {errors} = store;

    //react useEffect hook
    useEffect(()=>{
        dispatch(getErrors());
    },[]);


  return (
    <Box sx={{display:'flex',backgroundColor:'#c6ffc7',height:'1800px'}}>
        <Grid container sx={{display:'flex',justifyContent:'center'}}>
            <Grid item lg={10} md={12} sm={12} xs={12} sx={{borderRadius:'12px',display:'flex',height:'850px'}}>
                <Grid container>
                    <Header />
                    <Model />
                    <Buttons />
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ErrorLogin