import React from 'react';
import {Grid,Stack} from '@mui/material';
import Date from './date/ChooseDate';
import Shift from './shift/Shift';
import { getShifts } from "../../../redux/slices/loginSlices";
import {useRedux} from '../../../hooks/useRedux';
import '../../../index.css'
import {useTranslation} from 'react-i18next';


function DateShift({formik}) {
    //redux hook
    let shifts = useRedux({name:"login",data:"shifts",slice:getShifts()});
    const {t} = useTranslation();

  return (
    <Grid container sx={{marginTop:'1em',display:'flex',marginLeft:{lg:'0',md:'0',sm:'0',xs:'1em'}}}>
    <Grid item lg={0.1} md={0.3} sm={0.5} xs={0.3}></Grid>
        {shifts?.Response?.data.length > 2 ? (
                    <Grid item lg={8.2} md={8.2} sm={9} xs={12}>
                    {/* IMPORT DATE AND SHIFT */}
                    <Grid container
                    backgroundColor={()=>shifts?.Response?.data?.map((el)=>(
                        el?.shiftCode === formik?.values?.shift ? el.rgbColor : (
                            formik?.values?.shift==="M" ? '#12a6eb' : formik?.values?.shift === "K" ? '#ff0000' : formik?.values?.shift === "B" ? '#ffffff' : 'none'
                        )
                    ))}
                    sx={{height:'80px',borderRadius:'12px'}} className='bkg'>
                        <Grid item lg={2.2} md={2.2} sm={2.3} xs={2.4}>
                             <div sx={{fontWeight:'bold',marginTop:{lg:'1.5em',md:'1.5em',sm:'1.2em',xs:'1em'},paddingLeft:{lg:'0.3em'}}} className='txt-tarih'>{t('tarih')}</div>
                        </Grid>
                        <Grid item lg={8} md={8} sm={7} xs={7}>
                            <Stack direction='row'>
                                <Date formik={formik} />
                                <Shift formik={formik} shifts={shifts?.Response?.data} />
                            </Stack>
                        </Grid>
                        <Grid item lg={0.5} md={0.5} sm={1.5} xs={1.5}></Grid>
                    </Grid>
                </Grid>
        ):<h1></h1>}
    </Grid>
  )
}

export default DateShift;