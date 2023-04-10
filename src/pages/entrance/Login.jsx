import React,{useRef,useState} from 'react';
import { Box, Grid, Typography,Divider,Stack,Button} from '@mui/material';
import * as Yup from "yup";
import { useFormik } from "formik";
import moment from 'moment';
import VirtualKeyboard from '../../components/keyboard/VirtualKeyboard';
import { useNavigate } from "react-router-dom";
import DateShift from './dateShift/DateShift';
import ValidationMessages from '../../components/messages/ValidationMessages';
import TerminalList from './form/terminal/TerminalList';
import { userLogin } from "../../redux/slices/loginSlices";
import { useDispatch} from "react-redux";
import NumericKeyboard from '../../components/keyboard/NumericKeyboard';
import {useRedux} from '../../hooks/useRedux';
import TextFieldFormatter from '../../components/textField/TextFieldFormatter';
import '../../index.css';

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
    //use state
    const [inputName, setInputName] = useState("");
    const [inputs, setInputs] = useState({});

    //useNavigate
    const navigate = useNavigate();

    //use ref
    const keyboard = useRef();


    //moment
    let current = moment().format('L').split('/'); 

    //dispatch
    const dispatch = useDispatch();

    let obj = useRedux({name:"login",data:["user","loading"]});
    let user = obj[0];
    let loading = obj[1];


    //formik 
     const formik = useFormik({
        initialValues: {
        sicil_no: "",
        sifre: "",
        montaj_no:"",
        gun:parseInt(current[1]),
        ay:parseInt(current[0]),
        yil:parseInt(current[2]),
        vardiya:"M",
        },
        onSubmit: values => {
            dispatch(userLogin(values));     
        },
        validationSchema: formSchema,
    });

    const onChangeInput = (event) => {
        const inputVal = event.target.value;
    
        setInputs({
          ...inputs,
          [inputName]: inputVal
        });  
        formik?.setFieldValue("setInputs",{
            ...inputs,
            [inputName]: inputVal
          })
       keyboard.current.setInput(inputVal);
    };

    if(user?.data?.Response?.type==="Success") {
       return navigate('/cvqsterminal/terminal/defectentry');
     }

    return (
    <Box sx={{backgroundColor:'#c6ffc7',height:'1500px',width:{lg:'100%',md:'100%',sm:'100%',xs:'500px'}}}>
        <Grid container sx={{justifyContent:'center'}}>
            <Grid item lg={10} md={10} sm={12} xs={12} sx={{border:'2px solid #b7ecba',borderRadius:'12px',height:'60%'}}>
                <Stack direction='column' sx={{width:'100%',display:'flex'}}>
                    <Box sx={{justifyContent:'center',display:'flex'}}>
                        <Typography sx={{color:'#d23d42',fontWeight:'bold',fontSize:{lg:'20px'},padding:1,cursor:'pointer'}}
                        onClick={()=> navigate(`/cvqsterminal/terminals`)}
                        >CVQS(TMMT)</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{padding:2,display:'flex',justifyContent:'center'}}>
                        <Stack direction='column'>
                        <Box sx={{display:'flex',justifyContent:'center'}}>
                        {user?.data?.Response?.type==="Error" ?(
                            <ValidationMessages name="invalid_credentials" />
                        ):null}
                        </Box>
                    <form onSubmit={formik.handleSubmit}>
                        {/* terminal List */}
                        <TerminalList />
                        {/* sicilno */}
                        <Grid container sx={{marginTop:'1rem',width:'100%'}}>
                                   <Grid item lg={0.1} md={0.3} sm={0.5} xs={0.5}></Grid>
                                    <Grid item lg={2.3} md={2.3} sm={2.6} xs={3}>
                                        <div sx={{fontWeight:'bold',marginTop:'0.6rem'}} className='txt'>Sicil No</div>
                                    </Grid>
                                    <Grid item lg={7.5} md={7.5} sm={7.5} xs={7.5}>
                                         <TextFieldFormatter formik={formik} name={"sicil_no"} setInputName={setInputName} onChangeInput={onChangeInput} />
                                    </Grid>
                       </Grid>
                       <ValidationMessages formik={formik} name="sicil_no" />
                       {/* sifre */}
                        <Grid container sx={{marginTop:'1rem'}}>
                            <Grid item lg={0.1} md={0.3} sm={0.5} xs={0.5}></Grid>
                            <Grid item lg={2.3} md={2.3} sm={2.6} xs={3}>
                                        <div sx={{fontWeight:'bold',marginTop:'0.6rem'}} className='txt'>Şifre</div>
                            </Grid>
                            <Grid item lg={7.5} md={7.5} sm={7.5} xs={7.5}>
                                <TextFieldFormatter formik={formik} name={"sifre"} setInputName={setInputName} onChangeInput={onChangeInput} />
                            </Grid>
                        </Grid>
                        {/* montaj No */}
                       <ValidationMessages formik={formik} name="sifre" />
                        <Grid container sx={{marginTop:'1rem'}}>
                                <Grid item lg={0.1} md={0.3} sm={0.5} xs={0.5}></Grid>
                                <Grid item lg={2.3} md={2.3} sm={2.6} xs={3}>
                                        <div sx={{fontWeight:'bold',marginTop:'0.6rem'}} className='txt'>Montaj No</div>
                                </Grid>
                                <Grid item lg={7.5} md={7.5} sm={7.5} xs={7.5}>
                                    <TextFieldFormatter formik={formik} name={"montaj_no"} setInputName={setInputName} onChangeInput={onChangeInput} />
                                </Grid>
                        </Grid>
                        <ValidationMessages formik={formik} name="montaj_no" />
                        {/* Date and Shift */}
                        <DateShift formik={formik} />
                        {/* Buttons */}
                        <Grid container sx={{marginTop:'1em',height:{lg:'60px',md:'60px'}}}>
                                {/* <Grid item lg={0.1} md={1.6} sm={1.6} xs={0.6}></Grid> */}
                                {loading?(
                                <Grid item lg={5.8} md={5.8} sm={5.8} xs={5.8}>
                                    <Button variant="contained" disabled sx={{width:'100%',height:'100%',borderRadius:'8px',fontWeight:'bold',fontSize:'18px',backgroundColor:'#000000',marginLeft:{lg:'0.5em'}}}>loading...</Button>
                                 </Grid>
                                ):(
                                <Grid item lg={5.8} md={5.8} sm={5.8} xs={5.8}>
                                    <Button variant="contained" type='submit' sx={{width:'100%',height:'100%',borderRadius:'8px',fontWeight:'bold',fontSize:'18px',backgroundColor:'#000000',marginLeft:{lg:'0.5em'}}}>GİRİŞ YAP</Button>
                                  </Grid>
                                )}

                                <Grid item lg={0.4} md={0.4} sm={0.4} xs={0.4}></Grid>
                                <Grid item lg={5.8} md={5.8} sm={5.8} xs={5.8}>
                                  <Button
                                   variant="contained"
                                    sx={{width:'100%',height:'100%',borderRadius:'8px',fontWeight:'bold',fontSize:'18px',backgroundColor:'#d31823'}}
                                    onClick={()=> navigate(`/cvqsterminal/terminals`)}
                                    >
                                    KAPAT
                                </Button>
                                </Grid>
                        </Grid>
                    </form>
                        </Stack>
                    </Box>
                </Stack>
                {/* Keybaord */}
                <Box sx={{width:'100%',justifyContent:'center',display:'flex'}}>
                            {inputName ==="sicil_no" || inputName ==="sifre" || inputName==="" ? (
                                <VirtualKeyboard inputName={inputName} formik={formik} setInputs={setInputs} inputs={inputs} keyboard={keyboard}  />
                            ) : (
                                <NumericKeyboard inputName={inputName} formik={formik} setInputs={setInputs} inputs={inputs} keyboard={keyboard}  />
                            )}
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}
export default Login;