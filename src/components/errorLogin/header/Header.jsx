import React,{useEffect} from 'react';
import {
    Grid , Typography , Stack , Box
} from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { getErrorData  } from "../../../redux/slices/errorSlices";

function Header() {
    //redux requirements
    const dispatch = useDispatch();
    const store = useSelector(state => state?.error);
    const {errorData,errors} = store;
    
        //react useEffect hook
    useEffect(()=>{
        dispatch(getErrorData());
    },[]);
  return (
    <Grid item lg={12} md={12} sm={12} xs={12} sx={{height:'0px',marginTop:{lg:'2em',md:'0',sm:'0',xs:'0'}}}>
        <Grid container sx={{marginTop:'0.3em'}}>
                <Grid item lg={2.2} md={2} sm={2.5} xs={6}>
                    <Grid container >
                        <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
                            <Typography variant='h6'>MONTAJ NO</Typography>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
                            <Typography sx={{fontWeight:'bold'}} variant='h6'>{errorData?.data?.Response?.data[0]?.seqNo}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={1.7} md={1.5} sm={2} xs={6} sx={{display:'flex',justifyContent:'center',backgroundColor:'#12a5eb',borderRadius:'12px'}}>
                    <Grid container >
                        <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
                            <Typography variant='h6'>BODY NO</Typography>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
                            <Typography sx={{fontWeight:'bold'}} variant='h6'>{errorData?.data?.Response?.data[0]?.bodyNo}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={3.3} md={3.3} sm={3.5} xs={12} sx={{display:'flex',justifyContent:{lg:'flex-start',md:'flex-start',sm:'flex-start',xs:'center'}}}>
                    <Box>
                    <Typography sx={{color:'#857e18',fontWeight:'bold',fontSize:{lg:'22px',md:'20px',sm:'24px',xs:'26px'},marginLeft:'0.3em',marginTop:{lg:'0',md:'0',sm:'0',xs:'1em'}}}>HATA GİRİŞ EKRANI</Typography>   
                    </Box>
                </Grid>
                <Grid item lg={1.1} md={1} sm={2.5} xs={12}></Grid>
                <Grid 
                backgroundColor={errorData?.data?.Response?.data[0]?.bgColor}
                item lg={1.2} md={1.5} sm={1.5} xs={12} sx={{display:'flex',justifyContent:'center',borderRadius:'12px',color:'white',border:'1px solid black',marginTop:{lg:'0',md:'0',sm:'0',xs:'1em'}}}>
                    <Stack direction='column'>
                        <Typography variant='h6'>Renk</Typography>
                        <Typography variant='h6' sx={{justifyContent:'center',display:'flex',fontWeight:'bold'}}>{errorData?.data?.Response?.data[0]?.extCode}</Typography>
                    </Stack>
                </Grid>
                <Grid item lg={2.5} md={2.5} sm={12} xs={12}>
                    <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
                            <Typography sx={{color:'red',fontWeight:'bold',marginTop:'1.5em'}}>{errorData?.data?.Response?.data[0]?.firstname} {errorData?.data?.Response?.data[0]?.lastname} ({errorData?.data?.Response?.data[0]?.departmentCode})</Typography>
                        </Grid>
                    </Grid>
                </Grid>
        </Grid>   
    </Grid>
  )
}

export default Header