import React from 'react';
import {
    Grid, Typography
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useDispatch } from 'react-redux';
import {changeFontStatus} from '../../../redux/slices/largeFont';


function ButtomButtons() {
    const dispatch = useDispatch();

  return (
    <Grid container sx={{marginLeft:{lg:'0.4em',md:'0.4em',sm:'1em',xs:'1em'},marginRight:{lg:'0.4em',md:'0.4em',sm:'1em',xs:'1em'},display:'flex',marginTop:'0.5em',cursor:'Pointer',marginTop:'1em'}}>
        <Grid item lg={1.9} md={1.9} sm={3.7} xs={3.5} sx={{border:'1.5px solid #364737',borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em'}}>
            <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.8em',fontWeight:'bold',fontSize:{lg:'16px'}}}>Çıkış</Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={3.7} xs={3.5} sx={{border:'1.5px solid #364737',borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em'}}>
            <Typography sx={{display:'flex',justifyContent:'center',marginTop:{lg:'0.2em',md:'0.2em',sm:'1em',xs:'0.6em'},marginLeft:{lg:'1.7em',md:'1.5em',sm:'0.5em',xs:'1.3em'},fontWeight:'bold',fontSize:{lg:'16px',md:'16px',sm:'14px',xs:'14px'}}}>MODEL İLK RESMİ</Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={3.7} xs={3.5} sx={{border:'1.5px solid #364737',borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em'}}>
            <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.8em',fontWeight:'bold'}}>
                <ArrowBackIosNewIcon sx={{fontSize:'16px',fontWeight:'bold',marginRight:'0.6em',marginTop:'0.2em'}} />
                GERİ
            </Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={5.6} xs={5.3} sx={{border:'1.5px solid #364737',borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em',marginTop:{lg:'0',md:'0',sm:'0.3em',xs:'0.3em'}}}>
            <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.8em',fontWeight:'bold'}}>HATA LİSTESİ</Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={5.6} xs={5.3} sx={{border:'1.5px solid #364737',borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em',marginTop:{lg:'0',md:'0',sm:'0.3em',xs:'0.3em'}}}>
            <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.8em',fontWeight:'bold'}}>TEMİZLE</Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={11.3} xs={10.8} sx={{border:'1.5px solid #364737',borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em',marginTop:{lg:'0',md:'0',sm:'0.3em',xs:'0.3em'}}}>
            <Typography
             sx={{display:'flex',justifyContent:'center',marginTop:'0.8em',fontWeight:'bold'}}
             onClick={()=>dispatch(changeFontStatus())}
             >BÜYÜK FONT</Typography>
        </Grid>
    </Grid>
  )
}
export default ButtomButtons;