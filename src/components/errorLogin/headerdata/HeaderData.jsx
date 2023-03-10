import React from 'react';
import {
  Grid, Typography
} from '@mui/material';
import { useDispatch , useSelector} from "react-redux";
import { useEffect } from 'react';
import {getErrorData} from '../../../redux/slices/errorSlices';

function HeaderData() {
  //redux requirements
  const dispatch = useDispatch();
  const error = useSelector(store => store?.error);
  const {errorData} = error;

  //react hooks
  useEffect(()=>{
    dispatch(getErrorData());
  },[]);

  return (
    <Grid container>
      <Grid item lg={1.7} md={1.9} sm={6} xs={6}>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
            <Typography sx={{fontSize:'18px',marginTop:'0.1em'}}>MONTAJ NO</Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
           <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>{errorData?.data?.Response?.data[0]?.seqNo}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={1.2} md={1.6} sm={6} xs={6}>
        <Grid container sx={{borderRadius:'10px',backgroundColor:'#10a6eb',margin:0.1}}>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
              <Typography sx={{fontSize:'18px',marginTop:'0.1em'}}>BODY NO</Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
            <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>{errorData?.data?.Response?.data[0]?.bodyNo}</Typography>
            </Grid>
        </Grid>
      </Grid>
      <Grid item lg={2.8} md={2.8} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
        <Typography sx={{fontSize:{lg:'22px',md:'18px',sm:'20px'},fontWeight:'bold',color:'#847f18',marginTop:{lg:'0.2em',md:'0.4em',sm:'0.4em',xs:'0.5em'}}}>HATA GİRİŞ EKRANI</Typography>
      </Grid>
      <Grid item lg={2.7} md={2.3} sm={0} xs={0}>
      </Grid>
      <Grid item lg={0.9} md={0.9} sm={12} xs={12} sx={{marginTop:{lg:'0',md:'0',sm:'0.5em',xs:'1em'}}}>
        <Grid container sx={{borderRadius:'10px',margin:0.1,display:'flex',justifyContent:'center'}} backgroundColor={errorData?.data?.Response?.data[0]?.bgColor}>
              <Grid item lg={12} md={12} sm={12} xs={12}  sx={{display:'flex',justifyContent:'center'}}>
                <Typography sx={{fontSize:'18px',marginTop:'0.1em',color:'white'}}>RENK</Typography>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}  sx={{display:'flex',justifyContent:'center'}}>
              <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'white'}}>{errorData?.data?.Response?.data[0]?.extCode}</Typography>
              </Grid>
        </Grid>
      </Grid>
      <Grid item lg={2.7} md={2.5} sm={12} xs={12} sx={{display:'flex',justifyContent:'center',marginTop:{lg:'0',md:'0',sm:'1em',xs:'1em'}}}>
        <Typography sx={{color:'#d54c66',fontWeight:'bold',marginTop:{lg:'1em'}}}>{errorData?.data?.Response?.data[0]?.firstname} {errorData?.data?.Response?.data[0]?.lastname} ({errorData?.data?.Response?.data[0]?.departmentCode})</Typography>
      </Grid>
    </Grid>
  )
}
export default HeaderData;