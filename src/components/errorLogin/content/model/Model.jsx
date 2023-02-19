import React from 'react';
import {
    Grid,Avatar,Typography,Stack
} from '@mui/material';
import car from '../../../../img/car.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



function Model() {
  return (
    <Grid item lg={9.5} md={9.3} sm={12} xs={12}>
    <Grid container>
        <Grid lg={12} md={12}>
            <Avatar variant='square' src={car} sx={{width:'100%',height:{lg:'640px',md:'580px',sm:'560px',xs:'600px'}}} />
        </Grid>
    </Grid>
    <Grid container sx={{marginTop:'0.6em'}}>
        <Grid item lg={1.9} md={1.9} sm={1.9} xs={3.8} sx={{border:'1px solid black',borderRadius:'8px',display:'flex',justifyContent:'center',height:'70px',marginLeft:'0.3em'}}>
            <Typography sx={{fontWeight:'bold',marginTop:'1.5em'}}>ÇIKIŞ</Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={1.9} xs={3.8} sx={{border:'1px solid black',borderRadius:'8px',display:'flex',justifyContent:'center',height:'70px',marginLeft:'0.3em'}}>
            <Typography sx={{fontWeight:'bold',marginTop:'1.5em'}}>MODEL İLK</Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={1.9} xs={3.8} sx={{border:'1px solid black',borderRadius:'8px',display:'flex',justifyContent:'center',height:'70px',marginLeft:'0.3em'}}>
            <Stack direction='row' sx={{marginTop:'1.5em'}}>
                <ArrowBackIosIcon sx={{fontSize:'15px',marginTop:'0.2em',fontWeight:'bold'}} />
                <Typography sx={{fontWeight:'bold',marginLeft:'0.6em'}}>GERİ</Typography>
            </Stack>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={1.9} xs={3.8} sx={{border:'1px solid black',borderRadius:'8px',display:'flex',justifyContent:'center',height:'70px',marginLeft:'0.3em',marginTop:{lg:'0',md:'0',sm:'0',xs:'0.3em'}}}>
            <Typography sx={{fontWeight:'bold',marginTop:'1.5em'}}>HATA LİSTESİ</Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={1.9} xs={3.8} sx={{border:'1px solid black',borderRadius:'8px',display:'flex',justifyContent:'center',height:'70px',marginLeft:'0.3em',marginTop:{lg:'0',md:'0',sm:'0',xs:'0.3em'}}}>
            <Typography sx={{fontWeight:'bold',marginTop:'1.5em'}}>TEMİZLE</Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={1.9} xs={3.8} sx={{border:'1px solid black',borderRadius:'8px',display:'flex',justifyContent:'center',height:'70px',marginLeft:'0.3em',marginTop:{lg:'0',md:'0',sm:'0',xs:'0.3em'}}}>
            <Typography sx={{fontWeight:'bold',marginTop:'1.5em'}}>BÜYÜK FONT</Typography>
        </Grid>
    </Grid>
    </Grid>
  )
}

export default Model