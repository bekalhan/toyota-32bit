import React,{useEffect} from 'react';
import {
    Grid,Avatar,Typography,Stack,Box
} from '@mui/material';
import car from '../../../../img/car4.jpg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getErrorData ,getErrors } from "../../../../redux/slices/errorSlices";
import { useDispatch, useSelector } from "react-redux";


function Model() {
    //redux requirements
    const dispatch = useDispatch();
    const store = useSelector(state => state?.error);
    const {errors} = store;

    //react useEffect hook
    useEffect(()=>{
        dispatch(getErrors());
    },[]);

  return (
    <Grid item lg={9.5} md={10} sm={12} xs={12} sx={{marginTop:'0.3em',justifyContent:'center'}}>
    <Grid container>
        <Grid lg={12} md={12} sx={{position:'relative',display:{lg:'block',md:'none',sm:'none',xs:'none'},marginTop:{lg:'0em',md:'5em'}}}>
            <Avatar variant='square' src={car} sx={{width:'100%',height:'660px',backgroundRepeat:'no-repeat',top:0,position:'absolute'}} />
            {errors?.data?.Response?.data[0]?.defectButtonRecords.map((e)=>(
            <Box sx={{position:'absolute',borderRadius:'8px',border:`5px solid ${e.boxColor}`,justifyContent:'center'}}
            height={e.boxHeight}
            width={e.boxWidth}
            left={e.boxX} top={e.boxY}>
                <Typography sx={{maxWidth:'100%',backgroundColor:'white',color:`${e.labelColor}`,fontSize:'11px',display:'flex',justifyContent:'center'}}>{e.labelText}</Typography>
            </Box>
            ))}
        </Grid>
        <Grid lg={12} md={12} sx={{position:'relative',display:{lg:'none',md:'block',sm:'none',xs:'none'},marginTop:{lg:'0em',md:'5em'}}}>
            <Avatar variant='square' src={car} sx={{width:'100%',maxWidth:'1000px',height:'auto',backgroundRepeat:'no-repeat',top:0}} />
            {errors?.data?.Response?.data[0]?.defectButtonRecords.map((e)=>(
            <Box sx={{position:'absolute',borderRadius:'8px',border:`5px solid ${e.boxColor}`,justifyContent:'center'}}
            height={e.boxHeight}
            width={e.boxWidth}
            left={e.boxX} top={e.boxY}>
                <Typography sx={{maxWidth:'100%',backgroundColor:'white',color:`${e.labelColor}`,fontSize:'11px',display:'flex',justifyContent:'center'}}>{e.labelText}</Typography>
            </Box>
            ))}
        </Grid>
        <Grid lg={12} md={12} sx={{display:{lg:'none',md:'none',sm:'block',xs:'none',marginTop:'5em'}}}>
            <Avatar variant='square' src={car} sx={{width:'100%',height:'auto',backgroundRepeat:'no-repeat',top:0}} />
            {errors?.data?.Response?.data[0]?.defectButtonRecords.map((e)=>(
            <Box sx={{width:`${e.boxWidth}`,height:`${e.boxHeight}`,position:'absolute',borderRadius:'8px',border:`5px solid ${e.boxColor}`,justifyContent:'center'}} left={e.boxX} top={e.boxY+75}>
                <Typography sx={{maxWidth:'100%',backgroundColor:'white',color:`${e.labelColor}`,fontSize:'8px',display:'flex',justifyContent:'center'}}>{e.labelText}</Typography>
            </Box>
            ))}
        </Grid>
        <Grid lg={12} md={12} sx={{backgroundColor:'red',display:{lg:'none',md:'none',sm:'none',xs:'block',marginTop:'15em'}}}>
            <Avatar variant='square' src={car} sx={{width:'100%',height:'auto',backgroundRepeat:'no-repeat',top:0}} />
            {errors?.data?.Response?.data[0]?.defectButtonRecords.map((e)=>(
            <Box sx={{width:`${e.boxWidth}`,height:`${e.boxHeight}`,position:'absolute',borderRadius:'8px',border:`5px solid ${e.boxColor}`,justifyContent:'center'}} left={e.boxX} top={e.boxY}>
                <Typography sx={{maxWidth:'100%',backgroundColor:'white',color:`${e.labelColor}`,fontSize:'11px',display:'flex',justifyContent:'center'}}>{e.labelText}</Typography>
            </Box>
            ))}
        </Grid>
    </Grid>
    {/* <Grid container sx={{marginTop:'0.6em'}}>
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
    </Grid> */}
    </Grid>
  )
}

export default Model