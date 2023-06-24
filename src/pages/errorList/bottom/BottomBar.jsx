import React,{useState} from 'react';
import {Button, Grid, TextField, Typography ,Box} from '@mui/material';
import ScrollButton from '../../../components/scrollButton/ScrollButton';
import '../../../index.css'; 
import {useTranslation} from 'react-i18next';


function BottomBar() {
    console.log("bottom bar");
    const {t,i18n} = useTranslation();
  return (
    <Grid container sx={{height:'100%',width:'2100px'}} className='bt4'>
        <Grid item sx={{border:'0.3px solid gray',padding:1.4,borderRadius:'8px',width:'500px'}} className='bt1'>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Grid container>
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                            <Typography sx={{fontWeight:'bold'}} variant='h6'>{t('montajno')}</Typography>
                        </Grid>
                        <Grid item lg={8} md={8} sm={8} xs={8}>
                            <Grid container>
                                <Grid item lg={8} md={8} sm={8} xs={8}>
                                    <TextField size='small' sx={{width:'95%'}} />
                                </Grid>
                                <Grid item lg={4} md={4} sm={4} xs={4}>
                                    <Button sx={{width:'100%',color:'black',backgroundColor:'white',border:'1px solid black',fontWeight:'bold'}} variant='contained'>{t('ara')}</Button>
                                </Grid>
                            </Grid>                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{marginTop:'0.4em',width:'100%'}}>
                    <Grid container>
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                            <Typography sx={{fontWeight:'bold'}} variant='h6'>{t('bodyno')}</Typography>
                        </Grid>
                        <Grid item lg={8} md={8} sm={8} xs={8}>
                            <Grid container>
                                <Grid item lg={8} md={8} sm={8} xs={8}>
                                    <TextField size='small' sx={{width:'95%'}} />
                                </Grid>
                                <Grid item lg={4} md={4} sm={4} xs={4}>
                                    <Button sx={{width:'100%',color:'black',backgroundColor:'white',border:'1px solid black',fontWeight:'bold'}} variant='contained'>{t('ara')}</Button>
                                </Grid>
                            </Grid>                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Grid container>
                        <Grid item lg={8} md={8} sm={8} xs={8}>
                            <Typography sx={{color:'red',fontWeight:'bold',display:'flex',justifyContent:'center',marginTop:'1em',fontSize:'14px'}}>YUSUF ZIYA BASBUG (AI)</Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                            <Typography sx={{color:'red',fontWeight:'bold',display:'flex',justifyContent:'center',marginTop:'1em',fontSize:'14px'}}>{t('teknikdestek')}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item sx={{marginLeft:'0.4em',width:'120px'}} className='bt2'>
            <Box sx={{height:'60%',marginTop:'1.4em',width:'80%'}}>
                    <ScrollButton name={"errorList"} anc={"container"}  />
            </Box>
        </Grid>
        <Grid item sx={{width:'1000px',border:'0.3px solid gray',padding:1,borderRadius:'8px'}}>
            <Button sx={{height:'80%',width:'16%',marginLeft:'0.1em',marginTop:'0.8em',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold'}} variant='contained'>{t('araclistesi')}</Button>
            <Button sx={{height:'80%',width:'16%',marginLeft:'0.5em',marginTop:'0.8em',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold'}} variant='contained'>{t('manuelhata')}</Button>
            <Button sx={{height:'80%',width:'16%',marginLeft:'0.5em',marginTop:'0.8em',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold'}} variant='contained'>{t('cokluhata')}</Button>
            <Button sx={{height:'80%',width:'16%',marginLeft:'0.5em',marginTop:'0.8em',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold'}} variant='contained'>{t('hatalistesi')}</Button>
            <Button sx={{height:'80%',width:'16%',marginLeft:'0.5em',marginTop:'0.8em',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold'}} variant='contained'>{t('hatakopya')}</Button>
            <Button sx={{height:'80%',width:'16%',marginLeft:'0.5em',marginTop:'0.8em',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold'}} variant='contained'>{t('cikis')}</Button>
        </Grid>
    </Grid>
  )
}

export default BottomBar;