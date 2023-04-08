import React from 'react';
import {Button, Grid, Stack, TextField, Typography ,Box} from '@mui/material';
import ScrollButton from '../../../components/scrollButton/ScrollButton';

function BottomBar() {
  return (
    <Grid container sx={{height:'100%',width:'2270px'}}>
        <Grid item lg={3} md={3} sx={{border:'0.3px solid gray',padding:1.8,borderRadius:'8px'}}>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <Grid container>
                        <Grid item lg={4} md={4}>
                            <Typography sx={{fontWeight:'bold'}} variant='h6'>MONTAJ NO</Typography>
                        </Grid>
                        <Grid item lg={8} md={8}>
                            <Grid container>
                                <Grid item lg={8} md={8}>
                                    <TextField size='small' sx={{width:'95%'}} />
                                </Grid>
                                <Grid item lg={4} md={4}>
                                    <Button sx={{width:'100%',color:'black',backgroundColor:'white',border:'1px solid black',fontWeight:'bold'}} variant='contained'>ARA</Button>
                                </Grid>
                            </Grid>                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sx={{marginTop:'0.4em'}}>
                    <Grid container>
                        <Grid item lg={4} md={4}>
                            <Typography sx={{fontWeight:'bold'}} variant='h6'>BODY NO</Typography>
                        </Grid>
                        <Grid item lg={8} md={8}>
                            <Grid container>
                                <Grid item lg={8} md={8}>
                                    <TextField size='small' sx={{width:'95%'}} />
                                </Grid>
                                <Grid item lg={4} md={4}>
                                    <Button sx={{width:'100%',color:'black',backgroundColor:'white',border:'1px solid black',fontWeight:'bold'}} variant='contained'>ARA</Button>
                                </Grid>
                            </Grid>                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12}>
                    <Grid container>
                        <Grid item lg={8}>
                            <Typography sx={{color:'red',fontWeight:'bold',display:'flex',justifyContent:'center',marginTop:'1em',fontSize:'14px'}}>YUSUF ZIYA BASBUG (AI)</Typography>
                        </Grid>
                        <Grid item lg={4}>
                            <Typography sx={{color:'red',fontWeight:'bold',display:'flex',justifyContent:'center',marginTop:'1em',fontSize:'14px'}}>TEKNİK DESTEK</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item lg={0.6} md={0.6} sx={{marginLeft:'0.4em'}}>
            <Box sx={{height:'60%',marginTop:'1.4em',width:'100%'}}>
                    <ScrollButton name={"errorList"}  />
            </Box>
        </Grid>
        <Grid item lg={7} md={7}>
            <Button sx={{height:'80%',width:'15%',marginLeft:'2.4em',marginTop:'0.8em',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold'}} variant='contained'>ARAÇ LİSTESİ</Button>
            <Button sx={{height:'80%',width:'15%',marginLeft:'0.5em',marginTop:'0.8em',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold'}} variant='contained'>MANUEL HATA</Button>
            <Button sx={{height:'80%',width:'15%',marginLeft:'0.5em',marginTop:'0.8em',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold'}} variant='contained'>ÇOKLU HATA</Button>
            <Button sx={{height:'80%',width:'15%',marginLeft:'0.5em',marginTop:'0.8em',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold'}} variant='contained'>HATA LİSTESİ</Button>
            <Button sx={{height:'80%',width:'15%',marginLeft:'0.5em',marginTop:'0.8em',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold'}} variant='contained'>HATA KOPYA</Button>
            <Button sx={{height:'80%',width:'15%',marginLeft:'0.5em',marginTop:'0.8em',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold'}} variant='contained'>ÇIKIŞ</Button>
        </Grid>
    </Grid>
  )
}

export default BottomBar