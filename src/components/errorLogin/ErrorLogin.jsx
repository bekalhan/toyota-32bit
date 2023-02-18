import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Grid , Box, Typography , Stack, Avatar , Button ,TextField , Checkbox ,FormGroup , FormControlLabel
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getErrorData ,getErrors } from "../../redux/slices/errorSlices";
import car from '../../img/car.png';


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
    <Box sx={{display:'flex',backgroundColor:'#c6ffc7',height:'1800px'}}>
        <Grid container sx={{display:'flex',justifyContent:'center'}}>
            <Grid item lg={10} md={12} sm={12} xs={12} sx={{borderRadius:'12px',display:'flex',height:'850px'}}>
                <Grid container>
                    <Grid item lg={9.5} md={9.3} sm={12} xs={12}>
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
                            <Grid item lg={1.7} md={2} sm={2} xs={6} sx={{display:'flex',justifyContent:'center',backgroundColor:'#12a5eb',borderRadius:'12px'}}>
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
                                <Typography sx={{color:'#857e18',fontWeight:'bold',fontSize:{lg:'20px',md:'20px',sm:'24px',xs:'26px'},marginLeft:'0.3em',marginTop:{lg:'0',md:'0',sm:'0',xs:'1em'}}}>HATA GİRİŞ EKRANI</Typography>   
                                </Box>
                            </Grid>
                            <Grid item lg={3.5} md={3.5} sm={2.5} xs={12}></Grid>
                            <Grid 
                            backgroundColor={errorData?.data?.Response?.data[0]?.bgColor}
                            item lg={1.2} md={1.2} sm={1.5} xs={12} sx={{display:'flex',justifyContent:'center',height:'65px',borderRadius:'12px',color:'white',border:'1px solid black',marginTop:{lg:'0',md:'0',sm:'0',xs:'1em'}}}>
                                <Stack direction='column'>
                                    <Typography variant='h6'>Renk</Typography>
                                    <Typography variant='h6' sx={{justifyContent:'center',display:'flex',fontWeight:'bold'}}>{errorData?.data?.Response?.data[0]?.extCode}</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid container sx={{marginTop:'0.3em'}}>
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
                    <Grid item lg={2.5} md={2.7} sm={12} xs={12}>
                        <Grid container sx={{height:'75px'}}>
                            <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
                                <Typography sx={{color:'red',fontWeight:'bold',marginTop:'1.5em'}}>{errorData?.data?.Response?.data[0]?.firstname} {errorData?.data?.Response?.data[0]?.lastname} ({errorData?.data?.Response?.data[0]?.departmentCode})</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
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
                                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{paddingLeft:1,paddingRight:1}}>
                                        <Button disabled sx={{width:'100%',border:'1px solid black',padding:2.3}}>HIZLI KAYDET</Button>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12}  xs={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
                                        <Button disabled sx={{width:'100%',border:'1px solid black',padding:2.3}}>KAYDET VE GEÇ</Button>
                                    </Grid> 
                                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
                                        <Button disabled sx={{width:'100%',border:'1px solid black',padding:2.3}}>HATA KAYIT</Button>
                                    </Grid>
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
                                    <Button  sx={{width:'100%',border:'1px solid black',padding:2.5,color:'black',fontWeight:'bold'}}>ARA</Button>
                                </Grid>
                                <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
                                    <Button  sx={{width:'100%',border:'1px solid black',padding:2.5,color:'black',fontWeight:'bold'}}>TERMİNAL İLK RESMİ</Button>
                                </Grid> 
                                <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
                                    <Button  sx={{width:'100%',border:'1px solid black',padding:2.5,color:'black',fontWeight:'bold'}}>SIK GELEN HATA</Button>
                                </Grid>
                                <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
                                    <Button  sx={{width:'100%',border:'1px solid black',padding:2.5,color:'black',fontWeight:'bold'}}>MANİFEST</Button>
                                </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ErrorLogin