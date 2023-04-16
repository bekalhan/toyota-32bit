import React, { useState } from 'react';
import { Box,Grid, Typography ,Stack} from '@mui/material';
import HeaderData from '../../components/headerdata/HeaderData';
import Model from './display/content/Model';
import Buttons from './display/buttons/Buttons';
import ButtomButtons from './buttomButtons/ButtomButtons';
import {useRedux} from '../../hooks/useRedux';
import LargeFont from '../largeFont/LargeFont';
import '../../index.css';
import {useTime} from '../../hooks/useTime';
import ses from '../../utils/audio/ses.mp3';
import ScrollTop from '../../components/scrollTop/ScrollTop';

function ErrorLogin() {
let errorName = useRedux({name:"error",data:"errorName",slice:""});
let largeFont = useRedux({name:"font",data:"largeFont",slice:""});
let inactivity = useTime(30);

const handleAudio = () => {
        if(!inactivity){
            return(
                <audio controls autoPlay loop id='aud'>
                    <source src={ses} type="audio/mpeg" />
                </audio>
            )
        }
}

  return (
    <>
    <Box sx={{display:'none'}}>
        {handleAudio()}
    </Box>
    {largeFont ? <LargeFont status={inactivity} /> :
    <Box sx={{display:'flex',backgroundColor:'#c6ffc7',height:'95%',overflow:'auto',justifyContent:'center',width:'100%'}}>
        <ScrollTop />
        <Grid container sx={{display:'flex',justifyContent:'center'}} className='pic'>
            <Grid item lg={10} md={12} sm={12} xs={12} sx={{border:'2px solid #b7ecba',borderRadius:'10px'}}>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <HeaderData name="error" />
                    </Grid>
                    <Grid item lg={12} sx={{width:'100%'}}>
                        <Grid container>
                            <Grid item lg={9.3} md={9.5} sm={12} xs={12}>
                                <Model />
                            </Grid>
                            <Grid item lg={2.7} md={2.5} sm={12} xs={12} >
                                <Buttons status={inactivity} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={9.3} md={9.5} sm={12} xs={12}>
                        <ButtomButtons />
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    {errorName !==undefined ?(
                    <Grid container sx={{marginTop:'1em'}}>
                        <Grid item lg={6} sx={{display:'flex',justifyContent:'flex-start'}}>
                            <Typography variant='h6' sx={{marginLeft:'0.6em',fontWeight:'bold'}}>{errorName}</Typography>
                        </Grid>
                        <Grid item lg={6} sx={{display:'flex',justifyContent:'flex-end'}}>
                                <Stack direction="row" sx={{marginRight:'1em'}}>
                                     <Typography sx={{color:'red',fontWeight:'bold'}}>TEKNİK DESTEK</Typography>
                                     <Typography sx={{marginLeft:'0.5em'}}>CVQS(TMMT)</Typography>
                                </Stack>
                        </Grid>
                    </Grid>
                       ):(
                        <Grid container sx={{marginTop:'1em'}}>
                            <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'flex-end'}}>
                                <Stack direction="row" sx={{marginRight:'1em'}}>
                                     <Typography sx={{color:'red',fontWeight:'bold'}}>TEKNİK DESTEK</Typography>
                                     <Typography sx={{marginLeft:'0.5em'}}>CVQS(TMMT)</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                       )}
                </Grid>
            </Grid>
        </Grid>
    </Box>}
    </>
  
  )
}
export default ErrorLogin;