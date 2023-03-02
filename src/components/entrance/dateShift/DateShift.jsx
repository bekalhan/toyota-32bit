import React,{useEffect} from 'react';
import {Grid,Stack,Typography} from '@mui/material';
import Date from './date/ChooseDate';
import Shift from './shift/Shift';
import { getShifts } from "../../../redux/slices/loginSlices";
import { useDispatch, useSelector } from "react-redux";
import GridFormatter from '../../../utils/GridHelper/GridFormatter';
import { useState } from 'react';

function DateShift({formik}) {
    const [a,setA] = useState([]);

    const dispatch = useDispatch();

    const login = useSelector(state=>state?.login);
    const {shifts} = login;
  
    //react useEffect hook
    useEffect(()=>{
        dispatch(getShifts());
    },[]);

    console.log('shifts : :',shifts?.data?.Response?.data);


  return (
    <Grid container sx={{marginTop:'1em',display:'flex'}}>
    <Grid item lg={1.5} md={1.5} sm={1.5} xs={0.3}></Grid>
        {shifts?.data?.Response?.data.length > 2 ? (
                    <Grid item lg={8.2} md={8.2} sm={9} xs={12}>
                    <Grid container
                    backgroundColor={()=>shifts?.data?.Response?.data?.map((el)=>(
                        el?.shiftCode == formik?.values?.vardiya ? el.rgbColor : (
                            formik?.values?.vardiya=="M" ? '#12a6eb' : formik?.values?.vardiya == "K" ? '#ff0000' : formik?.values?.vardiya == "B" ? '#ffffff' : 'none'
                        )
                    ))}
                    sx={{height:'80px',borderRadius:'12px',width:{lg:'790px',md:'600px',sm:'560px',xs:'510px'}}}>
                        <GridFormatter format="3.5" content={
                            <Typography sx={{fontWeight:'bold',marginTop:{lg:'0.6em',md:'0.6em'},marginTop:'1.5em',paddingLeft:{lg:'0.3em'}}}>Tarih</Typography>
                        }>
                        </GridFormatter>
                        <Grid item lg={8} md={8} sm={7} xs={7}>
                            <Stack direction='row'>
                                <Date formik={formik} />
                                <Shift formik={formik} shifts={shifts?.data?.Response?.data} />
                            </Stack>
                        </Grid>
                        <Grid item lg={0.5} md={0.5} sm={1.5} xs={1.5}></Grid>
                    </Grid>
                </Grid>
        ):<h1>lkasmdklsa</h1>}
        <GridFormatter format="2"></GridFormatter>
    </Grid>
  )
}

export default DateShift;