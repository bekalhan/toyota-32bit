import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Grid , Box, Typography , Stack, Avatar , Button ,TextField , Checkbox ,FormGroup , FormControlLabel
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getErrorData ,getErrors } from "../../redux/slices/errorSlices";


function ErrorLogin() {
    //redux requirements
    const dispatch = useDispatch();
    const store = useSelector(state => state?.error);
    const {errorData,errors} = store;

    //react useEffect hook
    useEffect(()=>{
        dispatch(getErrorData());
        dispatch(getErrors());
    },[]);

    console.log("data :",errors?.data?.Response?.data[0]);


  return (
    <Box sx={{display:'flex',backgroundColor:'#c6ffc7',height:'1500px'}}>
        <Grid container sx={{display:'flex',justifyContent:'center'}}>
            <Grid item lg={10} md={12} sx={{border:'2px solid #b7ecba',borderRadius:'12px',display:'flex',height:'850px'}}>
                <Grid container>
                    <Grid item lg={9.3} md={9.3}>
                        <Grid container sx={{marginTop:'0.3em'}}>
                            <Grid item lg={2} md={2} sx={{display:'flex',justifyContent:'center'}}>
                                <Stack direction='column'>
                                    <Typography variant='h6'>MONTAJ NO</Typography>
                                    <Typography variant='h6' sx={{justifyContent:'center',display:'flex',fontWeight:'bold'}}>{errorData?.data?.Response?.data[0]?.seqNo}</Typography>
                                </Stack>
                            </Grid>
                            <Grid item lg={2} md={2} sx={{display:'flex',justifyContent:'center',backgroundColor:'#12a5eb',borderRadius:'12px'}}>
                                <Stack direction='column'>
                                    <Typography variant='h6'>BODY NO</Typography>
                                    <Typography variant='h6' sx={{justifyContent:'center',display:'flex',fontWeight:'bold'}}>{errorData?.data?.Response?.data[0]?.bodyNo}</Typography>
                                </Stack>
                            </Grid>
                            <Grid item lg={3.3} md={3.3} sx={{display:'flex',justifyContent:'center'}}>
                                <Box>
                                <Typography sx={{color:'#857e18',fontWeight:'bold',marginLeft:'0.3em',marginTop:'0.7em'}} variant='h6'>HATA GİRİŞ EKRANI</Typography>   
                                </Box>
                            </Grid>
                            <Grid item lg={3.7} md={3.7}></Grid>
                            <Grid 
                            backgroundColor={errorData?.data?.Response?.data[0]?.bgColor}
                            item lg={1} md={1} sx={{display:'flex',justifyContent:'center',height:'65px',borderRadius:'12px',color:'white'}}>
                                <Stack direction='column'>
                                    <Typography variant='h6'>Renk</Typography>
                                    <Typography variant='h6' sx={{justifyContent:'center',display:'flex',fontWeight:'bold'}}>{errorData?.data?.Response?.data[0]?.extCode}</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid container sx={{marginTop:'0.3em'}}>
                            <Grid lg={12} md={12}>
                                <Avatar variant='square' src={errors?.data?.Response?.data[0].terminalPictureId} sx={{width:'100%',height:{lg:'600px',md:'600px'}}} />
                            </Grid>
                        </Grid>
                        <Grid container sx={{marginTop:'0.6em'}}>
                            <Grid item lg={1.9} md={1.9} sx={{border:'1px solid black',borderRadius:'8px',display:'flex',justifyContent:'center',height:'70px',marginLeft:'0.3em'}}>
                                <Typography sx={{fontWeight:'bold',marginTop:'1.5em'}}>ÇIKIŞ</Typography>
                            </Grid>
                            <Grid item lg={1.9} md={1.9} sx={{border:'1px solid black',borderRadius:'8px',display:'flex',justifyContent:'center',height:'70px',marginLeft:'0.3em'}}>
                                <Typography sx={{fontWeight:'bold',marginTop:'1.5em'}}>MODEL İLK</Typography>
                            </Grid>
                            <Grid item lg={1.9} md={1.9} sx={{border:'1px solid black',borderRadius:'8px',display:'flex',justifyContent:'center',height:'70px',marginLeft:'0.3em'}}>
                                <Stack direction='row' sx={{marginTop:'1.5em'}}>
                                    <ArrowBackIosIcon sx={{fontSize:'15px',marginTop:'0.2em',fontWeight:'bold'}} />
                                    <Typography sx={{fontWeight:'bold',marginLeft:'0.6em'}}>GERİ</Typography>
                                </Stack>
                            </Grid>
                            <Grid item lg={1.9} md={1.9} sx={{border:'1px solid black',borderRadius:'8px',display:'flex',justifyContent:'center',height:'70px',marginLeft:'0.3em'}}>
                                <Typography sx={{fontWeight:'bold',marginTop:'1.5em'}}>HATA LİSTESİ</Typography>
                            </Grid>
                            <Grid item lg={1.9} md={1.9} sx={{border:'1px solid black',borderRadius:'8px',display:'flex',justifyContent:'center',height:'70px',marginLeft:'0.3em'}}>
                                <Typography sx={{fontWeight:'bold',marginTop:'1.5em'}}>TEMİZLE</Typography>
                            </Grid>
                            <Grid item lg={1.9} md={1.9} sx={{border:'1px solid black',borderRadius:'8px',display:'flex',justifyContent:'center',height:'70px',marginLeft:'0.3em'}}>
                                <Typography sx={{fontWeight:'bold',marginTop:'1.5em'}}>BÜYÜK FONT</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={2.7} md={2.7}>
                        <Grid container sx={{height:'75px'}}>
                            <Grid item lg={12} md={12} sx={{display:'flex',justifyContent:'center'}}>
                                <Typography sx={{color:'red',fontWeight:'bold',marginTop:'1.5em'}}>{errorData?.data?.Response?.data[0]?.firstname} {errorData?.data?.Response?.data[0]?.lastname} ({errorData?.data?.Response?.data[0]?.departmentCode})</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={12} md={12} sx={{display:'flex',justifyContent:'center'}}>
                              <Stack direction='row'>
                                         <FormGroup aria-label="position" row>
                                            <FormControlLabel
                                            value="end"
                                            control={<Checkbox/>}
                                            label="Harigami"
                                            labelPlacement="end"
                                            />
                                        </FormGroup>
                                        <FormGroup aria-label="position" row>
                                            <FormControlLabel
                                            value="end"
                                            control={<Checkbox />}
                                            label="RDD"
                                            labelPlacement="end"
                                            />
                                        </FormGroup>
                              </Stack>
                            </Grid>
                            <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1}}>
                                <Button disabled sx={{width:'100%',border:'1px solid black',padding:2.1}}>HIZLI KAYDET</Button>
                            </Grid>
                            <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
                                <Button disabled sx={{width:'100%',border:'1px solid black',padding:2.1}}>KAYDET VE GEÇ</Button>
                            </Grid> 
                            <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
                                <Button disabled sx={{width:'100%',border:'1px solid black',padding:2.1}}>HATA KAYIT</Button>
                            </Grid>
                            <Grid item lg={12} md={12} sx={{display:'flex',justifyContent:'center'}}>
                                <Typography sx={{fontWeight:'bold',marginTop:'0.3em'}} variant='h6'>MONTAJ NO</Typography>
                            </Grid>
                            <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1}}>
                            <TextField
                            sx={{width:'100%',backgroundColor:'white'}}
                            />
                            </Grid>
                            <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
                                <Button  sx={{width:'100%',border:'1px solid black',padding:2.3,color:'black',fontWeight:'bold'}}>ARA</Button>
                            </Grid>
                            <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
                                <Button  sx={{width:'100%',border:'1px solid black',padding:2.3,color:'black',fontWeight:'bold'}}>TERMİNAL İLK RESMİ</Button>
                            </Grid> 
                            <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
                                <Button  sx={{width:'100%',border:'1px solid black',padding:2.3,color:'black',fontWeight:'bold'}}>SIK GELEN HATA</Button>
                            </Grid>
                            <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
                                <Button  sx={{width:'100%',border:'1px solid black',padding:2.3,color:'black',fontWeight:'bold'}}>MANİFEST</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ErrorLogin