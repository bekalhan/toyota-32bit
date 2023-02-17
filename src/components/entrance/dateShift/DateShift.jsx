import React,{useEffect} from 'react';
import {Grid,Stack,Typography} from '@mui/material';
import Date from './date/ChooseDate';
import Shift from './shift/Shift';
import { getShifts } from "../../../redux/slices/loginSlices";
import { useDispatch, useSelector } from "react-redux";

function DateShift({formik}) {

    const dispatch = useDispatch();

    const login = useSelector(state=>state?.login);
    const {shifts} = login;
  
    //react useEffect hook
    useEffect(()=>{
          dispatch(getShifts());
    },[]);

  return (
    <Grid container sx={{marginTop:'1em',display:'flex'}}>
    <Grid item lg={1.5} md={1.5} sm={1.5} xs={0.3}></Grid>
        <Grid item lg={8.2} md={8.2} sm={9}>
            <Grid container
            backgroundColor={()=>shifts?.data?.Response?.data?.map((el)=>(
                el?.shiftCode == formik?.values?.vardiya ? el.rgbColor : 'none'
            ))}
            sx={{height:'80px',borderRadius:'12px',width:{lg:'790px',md:'600px',sm:'560px',xs:'510px'}}}>
                <Grid item lg={3.5} md={3.5} sm={3.5} xs={3.5} sx={{display:'flex',justifyContent:'flex-start'}}>
                    <Typography sx={{fontWeight:'bold',marginTop:{lg:'0.6em',md:'0.6em'},marginTop:'1.5em',paddingLeft:{lg:'0.3em'}}}>Tarih</Typography>
                </Grid>
                <Grid item lg={8} md={8} sm={7} xs={7}>
                    <Stack direction='row'>
                        <Date formik={formik} />
                        <Shift formik={formik} shifts={shifts?.data?.Response?.data} />
                    </Stack>
                </Grid>
                <Grid item lg={0.5} md={0.5} sm={1.5} xs={1.5}></Grid>
            </Grid>
        </Grid>
    <Grid item lg={2} md={2} sm={2}></Grid>
    </Grid>
  )
}

export default DateShift;