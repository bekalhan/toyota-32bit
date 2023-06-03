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
import { useEffect } from 'react';
import {changeScroll} from '../../redux/slices/errorSlices';
import { useDispatch } from 'react-redux';
import {useTranslation} from 'react-i18next';
import theme from 'theme/theme';


function ErrorLogin() {
let errorName = useRedux({name:"error",data:"errorName",slice:""});
let largeFont = useRedux({name:"font",data:"largeFont",slice:""});
const [scroll,setScroll] = useState({left:"",top:""});

//inactivity custom hook
let inactivity = useTime(30);
const {t} = useTranslation();

//mui theme

const dispatch = useDispatch();

//for audio
const handleAudio = () => {
        if(!inactivity){
            return(
                <audio controls autoPlay loop id='aud'>
                    <source src={ses} type="audio/mpeg" />
                </audio>
            )
        }
}

//catch event for line
const handleScroll = (event) => {
    setScroll({left:event.currentTarget.scrollLeft,top:event.currentTarget.scrollTop});
}

useEffect(()=>{
    dispatch(changeScroll(scroll))
},[scroll]);

  return (
    <>
    <Box sx={{display:'none'}}>
        {handleAudio()}
    </Box>
    {/* LARGE FONT OR ERROR LOGİN PAGE */}
    {largeFont ? <LargeFont status={inactivity} /> :
    <Box sx={{display:'flex',height:'95%',justifyContent:'center',width:'100%'}} onScroll={handleScroll}>
        <ScrollTop />
        <Grid container sx={{display:'flex',justifyContent:'center'}} className='pic'>
            <Grid item lg={10} md={12} sm={12} xs={12} sx={{border:`2px solid ${theme.palette.custom.borderColor}`,borderRadius:'10px',height:'800px'}}>
                <Grid container>
                    {/* HEADER DATA */}
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <HeaderData name="error" />
                    </Grid>
                    {/* PICTURE AND BUTTONS */}
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
                    {/* BOTTOM BUTTONS */}
                    <Grid item lg={9.3} md={9.5} sm={12} xs={12}>
                        <ButtomButtons />
                    </Grid>
                </Grid>
                {/* SUPPORT */}
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    {errorName !==undefined ?(
                    <Grid container sx={{marginTop:'1em'}}>
                        <Grid item lg={6} sx={{display:'flex',justifyContent:'flex-start'}}>
                            <Typography variant='h6' sx={{marginLeft:'0.6em',fontWeight:'bold'}}>{errorName}</Typography>
                        </Grid>
                        <Grid item lg={6} sx={{display:'flex',justifyContent:'flex-end'}}>
                                <Stack direction="row" sx={{marginRight:'1em'}}>
                                     <Typography sx={{color:'red',fontWeight:'bold'}}>{t('teknikdestek')}</Typography>
                                     <Typography sx={{marginLeft:'0.5em'}}>CVQS(TMMT)</Typography>
                                </Stack>
                        </Grid>
                    </Grid>
                       ):(
                        <Grid container sx={{marginTop:'1em'}}>
                            <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'flex-end'}}>
                                <Stack direction="row" sx={{marginRight:'1em'}}>
                                     <Typography sx={{color:'red',fontWeight:'bold'}}>{t('teknikdestek')}</Typography>
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