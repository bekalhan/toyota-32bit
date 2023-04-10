import React from 'react';
import {Grid,Stack,Typography} from '@mui/material';
import Date from './date/ChooseDate';
import Shift from './shift/Shift';
import { getShifts } from "../../../redux/slices/loginSlices";
import GridFormatter from '../../../utils/GridHelper/GridFormatter';
import {useRedux} from '../../../hooks/useRedux';
import '../../../index.css'

function DateShift({formik}) {
    let shifts = useRedux({name:"login",data:"shifts",slice:getShifts()});
  return (
    <Grid container sx={{marginTop:'1em',display:'flex',marginLeft:{lg:'0',md:'0',sm:'0',xs:'1em'}}}>
    <Grid item lg={0.1} md={0.3} sm={0.5} xs={0.3}></Grid>
        {shifts?.data?.Response?.data.length > 2 ? (
                    <Grid item lg={8.2} md={8.2} sm={9} xs={12}>
                    <Grid container
                    backgroundColor={()=>shifts?.data?.Response?.data?.map((el)=>(
                        el?.shiftCode === formik?.values?.vardiya ? el.rgbColor : (
                            formik?.values?.vardiya==="M" ? '#12a6eb' : formik?.values?.vardiya === "K" ? '#ff0000' : formik?.values?.vardiya === "B" ? '#ffffff' : 'none'
                        )
                    ))}
                    sx={{height:'80px',borderRadius:'12px'}} className='bkg'>
                        <Grid item lg={2.2} md={2.2} sm={2.3} xs={2.4}>
                             <div sx={{fontWeight:'bold',marginTop:{lg:'1.5em',md:'1.5em',sm:'1.2em',xs:'1em'},paddingLeft:{lg:'0.3em'}}} className='txt-tarih'>Tarih</div>
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
        ):<h1></h1>}
        <GridFormatter format="2"></GridFormatter>
    </Grid>
  )
}

export default DateShift;