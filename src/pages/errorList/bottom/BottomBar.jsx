import React from 'react';
import {Button, Grid, Stack, TextField, Typography ,Box} from '@mui/material';
import ScrollButton from '../../../components/scrollButton/ScrollButton';

function BottomBar() {
  return (
    <Grid container sx={{height:'100%',width:'3000px'}}>
        <Grid item sx={{border:'0.3px solid gray',padding:1.4,borderRadius:'8px',width:'800px'}}>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Grid container>
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                            <Typography sx={{fontWeight:'bold'}} variant='h6'>MONTAJ NO</Typography>
                        </Grid>
                        <Grid item lg={8} md={8} sm={8} xs={8}>
                            <Grid container>
                                <Grid item lg={8} md={8} sm={8} xs={8}>
                                    <TextField size='small' sx={{width:'95%'}} />
                                </Grid>
                                <Grid item lg={4} md={4} sm={4} xs={4}>
                                    <Button sx={{width:'100%',color:'black',backgroundColor:'white',border:'1px solid black',fontWeight:'bold'}} variant='contained'>ARA</Button>
                                </Grid>
                            </Grid>                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{marginTop:'0.4em',width:'100%'}}>
                    <Grid container>
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                            <Typography sx={{fontWeight:'bold'}} variant='h6'>BODY NO</Typography>
                        </Grid>
                        <Grid item lg={8} md={8} sm={8} xs={8}>
                            <Grid container>
                                <Grid item lg={8} md={8} sm={8} xs={8}>
                                    <TextField size='small' sx={{width:'95%'}} />
                                </Grid>
                                <Grid item lg={4} md={4} sm={4} xs={4}>
                                    <Button sx={{width:'100%',color:'black',backgroundColor:'white',border:'1px solid black',fontWeight:'bold'}} variant='contained'>ARA</Button>
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
                            <Typography sx={{color:'red',fontWeight:'bold',display:'flex',justifyContent:'center',marginTop:'1em',fontSize:'14px'}}>TEKNİK DESTEK</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item sx={{marginLeft:'0.4em',width:'150px'}}>
            <Box sx={{height:'60%',marginTop:'1.4em',width:'80%'}}>
                    <ScrollButton name={"errorList"}  />
            </Box>
        </Grid>
        <Grid item sx={{width:'1600px',border:'0.3px solid gray',padding:1,borderRadius:'8px'}}>
            <Button sx={{height:'80%',width:'15%',marginLeft:'0.1em',marginTop:'0.8em',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold'}} variant='contained'>ARAÇ LİSTESİ</Button>
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