import React from 'react';
import {
  Grid, Typography
} from '@mui/material';
import {getErrorData} from '../../redux/slices/errorSlices';
import { useRedux } from '../../hooks/useRedux';
import {useTranslation} from 'react-i18next';


function HeaderData({name}) {
  let errorData = useRedux({name:"error",data:"errorData",slice:getErrorData()});
  const {t} = useTranslation();
  return (
    <Grid container>
      <Grid item lg={name==="error" ? 1.7 : 1.2} md={1.9} sm={6} xs={6}>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
            <Typography sx={{fontSize:'18px',marginTop:'0.1em'}}>{t('montajno')}</Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
           <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>{errorData?.Response?.data[0]?.seqNo}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={name==="error" ? 1.2 : 1} md={1.6} sm={6} xs={6}>
        <Grid container sx={{borderRadius:'10px',backgroundColor:'#10a6eb',margin:0.1}}>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
              <Typography sx={{fontSize:'18px',marginTop:'0.1em'}}>{t('bodyno')}</Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
            <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>{errorData?.Response?.data[0]?.bodyNo}</Typography>
            </Grid>
        </Grid>
      </Grid>
      <Grid item lg={name==="error" ? 2.8 : 2.2} md={2.8} sm={12} xs={12} sx={{display:'flex',justifyContent:{lg:'flex-start',md:'flex-start',sm:'center',xs:'center'}}}>
        <Typography sx={{fontSize:{lg:'22px',md:'18px',sm:'20px',xs:'20px'},fontWeight:'bold',color:'#847f18',marginTop:{lg:'0.2em',md:'0.4em',sm:'0.4em',xs:'0.5em'},marginLeft:{lg:'0.4em'}}}>{t('hatagirisekrani')}</Typography>
      </Grid>
      <Grid item lg={name==="error" ? 2.7 : 1} md={2.3} sm={0} xs={0}>
      </Grid>
      <Grid item lg={0.9} md={0.9} sm={12} xs={12} sx={{marginTop:{lg:'0',md:'0',sm:'0.5em',xs:'1em'}}}>
        <Grid container sx={{borderRadius:'10px',margin:0.1,display:'flex',justifyContent:'center'}} backgroundColor={errorData?.Response?.data[0]?.bgColor}>
              <Grid item lg={12} md={12} sm={12} xs={12}  sx={{display:'flex',justifyContent:'center'}}>
                <Typography sx={{fontSize:'18px',marginTop:'0.1em',color:'white'}}>{t('renk')}</Typography>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}  sx={{display:'flex',justifyContent:'center'}}>
              <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'white'}}>{errorData?.Response?.data[0]?.extCode}</Typography>
              </Grid>
        </Grid>
      </Grid>
      <Grid item lg={name==="error" ? 2.7 : 5.7} md={2.5} sm={12} xs={12} sx={{display:'flex',justifyContent:'center',marginTop:{lg:'0',md:'0',sm:'1em',xs:'1em'}}}>
        <Typography sx={{color:'#d54c66',fontWeight:'bold',marginTop:{lg:'1em'}}}>{errorData?.Response?.data[0]?.firstname} {errorData?.Response?.data[0]?.lastname} ({errorData?.Response?.data[0]?.departmentCode})</Typography>
      </Grid>
    </Grid>
  )
}
export default HeaderData;