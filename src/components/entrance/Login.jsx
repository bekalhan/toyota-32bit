import React from 'react';
import { Box, Grid, Typography,Divider,Stack,Button} from '@mui/material';
import * as Yup from "yup";
import { useFormik } from "formik";
import moment from 'moment';
import VirtualKeyboard from './keyboard/VirtualKeyboard';
import { useNavigate } from "react-router-dom";
import DateShift from './dateShift/DateShift';
import Form from './form/Form';



//Form schema
const formSchema = Yup.object({
    sicil_no: Yup.string().required("Lütfen bir sicil numarası giriniz"),
    sifre: Yup.string().required("Lütfen bir sifre giriniz"),
    montaj_no : Yup.string().max(3).required("Lütfen en fazla 3 haneli bir montaj no giriniz"),
    gun:  Yup.string().required("Lütfen bir gün giriniz"),
    ay : Yup.string().required("Lütfen bir ay giriniz"),
    yil : Yup.string().required("Lütfen bir yil giriniz"),
    vardiya : Yup.string().required("Lütfen bir vardiya giriniz")
  });

function Login() {
    //useNavigate
    const navigate = useNavigate();

    //moment
    let current = moment().format('L').split('/'); 

    //formik 
     const formik = useFormik({
        initialValues: {
        sicil_no: "",
        sifre: "",
        montaj_no:"",
        gun:parseInt(current[1]),
        ay:parseInt(current[0]),
        yil:parseInt(current[2]),
        vardiya:"M"
        },
        onSubmit: values => {
            console.log("gelen değerler :",values);
        //dispath the action
        //dispatch(loginUserAction(values));
        },
        validationSchema: formSchema,
    });
  
    return (
    <Box sx={{display:'flex',backgroundColor:'#c6ffc7',height:'1500px'}}>
        <Grid container sx={{justifyContent:'center'}}>
            <Grid item lg={10} md={10} sm={12} xs={12} sx={{border:'2px solid #b7ecba',borderRadius:'12px',display:'flex',height:'950px'}}>
                <Stack direction='column' sx={{width:'100%',display:'flex'}}>
                    <Box sx={{justifyContent:'center',display:'flex'}}>
                        <Typography sx={{color:'#d23d42',fontWeight:'bold',fontSize:{lg:'20px'},padding:1}}>CVQS(TMMT)</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{padding:2}}>
                        <Stack direction='column'>
                        <form onSubmit={formik.handleSubmit}>
                            <Form formik={formik} />
                            <DateShift formik={formik} />
                            <Grid container sx={{marginTop:{lg:'1em',md:'1em',sm:'1em',xs:'1em'},height:{lg:'60px',md:'60px'}}}>
                                <Grid item lg={1} md={1.6} sm={1.6} xs={0.6}></Grid>
                                <Grid item lg={4} md={3.6} sm={4.4} xs={5}>
                                  <Button variant="contained" type='submit' sx={{width:'100%',height:'100%',borderRadius:'8px',fontWeight:'bold',fontSize:'18px',backgroundColor:'#000000',marginLeft:{lg:'3em'}}}>GİRİŞ YAP</Button>
                                </Grid>
                                <Grid item lg={1} md={0.4} sm={0.3} xs={0.2}></Grid>
                                <Grid item lg={4} md={3.5} sm={4.4} xs={5}>
                                  <Button
                                   variant="contained"
                                    sx={{width:'100%',height:'100%',borderRadius:'8px',fontWeight:'bold',fontSize:'18px',backgroundColor:'#d31823'}}
                                    onClick={()=> navigate(`/cvqsterminal/terminals`)}
                                    >
                                    KAPAT
                                </Button>
                                </Grid>
                            </Grid>
                            {/* <VirtualKeyboard inputName={inputName} formik={formik} setInputs={setInputs} inputs={inputs} keyboard={keyboard}  /> */}
                        </form>
                        </Stack>
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Login