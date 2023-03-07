import React from 'react';
import {
  Grid, Typography
} from '@mui/material';

function HeaderData() {
  return (
    <Grid container>
      <Grid item lg={1.9} md={1.9} sm={6} xs={6}>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
            <Typography sx={{fontSize:'18px',marginTop:'0.1em'}}>MONTAJ NO</Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
           <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>222</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={1.6} md={1.6} sm={6} xs={6}>
        <Grid container sx={{borderRadius:'10px',backgroundColor:'#10a6eb',margin:0.1}}>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
              <Typography sx={{fontSize:'18px',marginTop:'0.1em'}}>BODY NO</Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
            <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>25073</Typography>
            </Grid>
        </Grid>
      </Grid>
      <Grid item lg={2.8} md={2.8} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
        <Typography sx={{fontSize:{lg:'20px',md:'18px',sm:'20px'},fontWeight:'bold',color:'#9ca33f',marginTop:{lg:'0.4em',md:'0.4em',sm:'0.4em',xs:'0.5em'}}}>HATA GİRİŞ EKRANI</Typography>
      </Grid>
      <Grid item lg={2.3} md={2.3} sm={0} xs={0}>
      </Grid>
      <Grid item lg={0.9} md={0.9} sm={12} xs={12} sx={{marginTop:{lg:'0',md:'0',sm:'0.5em',xs:'1em'}}}>
        <Grid container sx={{borderRadius:'10px',backgroundColor:'#ff1b24',margin:0.1,display:'flex',justifyContent:'center'}}>
              <Grid item lg={12} md={12} sm={12} xs={12}  sx={{display:'flex',justifyContent:'center'}}>
                <Typography sx={{fontSize:'18px',marginTop:'0.1em',color:'white'}}>RENK</Typography>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}  sx={{display:'flex',justifyContent:'center'}}>
              <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'white'}}>3U5</Typography>
              </Grid>
        </Grid>
      </Grid>
      <Grid item lg={2.5} md={2.5} sm={12} xs={12} sx={{display:'flex',justifyContent:'center',marginTop:{lg:'0',md:'0',sm:'1em',xs:'1em'}}}>
        <Typography sx={{color:'#d54c66',fontWeight:'bold',marginTop:{lg:'1em'}}}>Yusuf Ziya Başbuğ</Typography>
      </Grid>
    </Grid>
  )
}

export default HeaderData