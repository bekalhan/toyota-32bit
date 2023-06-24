import React,{useRef,useState} from 'react';
import { Box, Grid, Typography,Divider,Stack,Button} from '@mui/material';
import * as Yup from "yup";
import { useFormik } from "formik";
import moment from 'moment';
import VirtualKeyboard from '../../components/keyboard/VirtualKeyboard';
import { useNavigate , useParams } from "react-router-dom";
import DateShift from './dateShift/DateShift';
import ValidationMessages from '../../components/messages/ValidationMessages';
import TerminalList from './form/terminal/TerminalList';
import { userLogin  } from "../../redux/slices/loginSlices";
import { useDispatch} from "react-redux";
import NumericKeyboard from '../../components/keyboard/NumericKeyboard';
import {useRedux} from '../../hooks/useRedux';
import TextFieldFormatter from '../../components/textField/TextFieldFormatter';
import ScrollTop from '../../components/scrollTop/ScrollTop';
import {useTranslation} from 'react-i18next';
import '../../index.css';
import {useTheme} from '@mui/material';

function Login() {
    //use state
    const [inputName, setInputName] = useState("");
    const [inputs, setInputs] = useState({});

    //useNavigate
    const navigate = useNavigate();
    const params = useParams();

    //mui theme
    const theme = useTheme();

    //use ref
    const keyboard = useRef();

    const {t,i18n} = useTranslation();

    //Form schema
    const formSchema = Yup.object({
    s_no: Yup.string().required(t('sicilmesaj')),
    password: Yup.string().required(t('sifremesaj')),
    m_no : Yup.string().max(3).required(t('montajmesaj')),
    });

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
        s_no: "",
        password: "",
        m_no:"",
        day:parseInt(current[1]),
        month:parseInt(current[0]),
        year:parseInt(current[2]),
        shift:"M",
        },
        onSubmit: values => {
            console.log("values : ",values);
            dispatch(userLogin(values));     
        },
        validationSchema: formSchema,
    });

    //get input change and set keyboard ref
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

    // if user login
    if(user?.data?.Response?.type==="Success") {
       return navigate(`/cvqsterminal/terminal/defectentry/${params.depcode}/${params.filtercode}/3070725`);
     }
    return (
        <Box sx={{height:'max-content',width:{lg:'100%',md:'100%',sm:'100%',xs:'500px'}}}>
        <ScrollTop />
        <Grid container sx={{justifyContent:'center'}}>
            <Grid item lg={9} md={10} sm={12} xs={12} sx={{border:`2px solid ${theme.palette.custom.borderColor}`,height:{lg:'880px',md:'900px',sm:'800px',xs:'800px'},borderRadius:'12px'}}>
                <Stack direction='column' sx={{width:'100%',display:'flex'}}>
                    {/* HEADER */}
                    <Box sx={{justifyContent:'center',display:'flex'}}>
                        <Typography sx={{color:'#d23d42',fontWeight:'bold',fontSize:{lg:'20px'},padding:1,cursor:'pointer'}}
                        onClick={()=> navigate(`/cvqsterminal/terminals`)}
                        >CVQS(TMMT)</Typography>
                    </Box>
                    <Divider />
                    {/* FORMİK */}
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
                        {/* ASSY */}
                        <Grid container sx={{marginTop:'0.5rem',width:'100%'}}>
                                   <Grid item lg={0.1} md={0.3} sm={0.5} xs={0.5}></Grid>
                                    <Grid item lg={2.3} md={2.3} sm={2.6} xs={3}>
                                        <div sx={{fontWeight:'bold',marginTop:'0.6rem'}} className='txt'>{t('sicilno')}</div>
                                    </Grid>
                                    <Grid item lg={7.5} md={7.5} sm={7.5} xs={7.5}>
                                         <TextFieldFormatter formik={formik} name={"s_no"} setInputName={setInputName} onChangeInput={onChangeInput} />
                                    </Grid>
                       </Grid>
                       <ValidationMessages formik={formik} name="s_no" />
                       {/* PASSWORD */}
                        <Grid container sx={{marginTop:'0.5rem'}}>
                            <Grid item lg={0.1} md={0.3} sm={0.5} xs={0.5}></Grid>
                            <Grid item lg={2.3} md={2.3} sm={2.6} xs={3}>
                                        <div sx={{fontWeight:'bold',marginTop:'0.6rem'}} className='txt'>{t('sifre')}</div>
                            </Grid>
                            <Grid item lg={7.5} md={7.5} sm={7.5} xs={7.5}>
                                <TextFieldFormatter formik={formik} name={"password"} setInputName={setInputName} onChangeInput={onChangeInput} />
                            </Grid>
                        </Grid>
                        {/* M-No */}
                       <ValidationMessages formik={formik} name="password" />
                        <Grid container sx={{marginTop:'0.5rem'}}>
                                <Grid item lg={0.1} md={0.3} sm={0.5} xs={0.5}></Grid>
                                <Grid item lg={2.3} md={2.3} sm={2.6} xs={3}>
                                        <div sx={{fontWeight:'bold',marginTop:'0.6rem'}} className='txt'>{t('montajno')}</div>
                                </Grid>
                                <Grid item lg={7.5} md={7.5} sm={7.5} xs={7.5}>
                                    <TextFieldFormatter formik={formik} name={"m_no"} setInputName={setInputName} onChangeInput={onChangeInput} />
                                </Grid>
                        </Grid>
                        <ValidationMessages formik={formik} name="m_no" />
                        {/* Date and Shift */}
                        <DateShift formik={formik} />
                        {/* Buttons */}
                        <Grid container sx={{marginTop:'0.6em',height:{lg:'60px',md:'60px'}}}>
                                {loading?(
                                <Grid item lg={5.8} md={5.8} sm={5.8} xs={5.8}>
                                    <Button variant="contained" disabled sx={{width:'100%',height:'100%',borderRadius:'8px',fontWeight:'bold',fontSize:'18px',backgroundColor:`${theme.palette.custom.dark}`,marginLeft:{lg:'0.5em'}}}>loading...</Button>
                                 </Grid>
                                ):(
                                <Grid item lg={5.8} md={5.8} sm={5.8} xs={5.8}>
                                    <Button variant="contained" type='submit' sx={{width:'100%',height:'100%',borderRadius:'8px',fontWeight:'bold',fontSize:'18px',backgroundColor:`${theme.palette.custom.dark}`,marginLeft:{lg:'0.5em'}}}>{t('girisyap')}</Button>
                                  </Grid>
                                )}

                                <Grid item lg={0.4} md={0.4} sm={0.4} xs={0.4}></Grid>
                                <Grid item lg={5.8} md={5.8} sm={5.8} xs={5.8}>
                                  <Button
                                   variant="contained"
                                    sx={{width:'100%',height:'100%',borderRadius:'8px',fontWeight:'bold',fontSize:'18px',backgroundColor:`${theme.palette.custom.red}`}}
                                    onClick={()=> navigate(`/cvqsterminal/terminals`)}
                                    >
                                    {t('kapat')}
                                </Button>
                                </Grid>
                        </Grid>
                    </form>
                        </Stack>
                    </Box>
                    {/* KEYBOARD */}
                    <Box sx={{display:'flex',justifyContent:'center'}}>
                            {inputName ==="s_no" || inputName ==="password" || inputName==="" ? (
                                <VirtualKeyboard inputName={inputName} formik={formik} setInputs={setInputs} inputs={inputs} keyboard={keyboard} language={i18n.language}  />
                            ) : (
                                <NumericKeyboard inputName={inputName} formik={formik} setInputs={setInputs} inputs={inputs} keyboard={keyboard}  />
                            )}
                  </Box>
                  {/* TEKNİK DESTEK */}
                  <Grid container sx={{marginTop:'6em'}}>
                            <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'flex-end'}}>
                                <Stack direction="row" sx={{marginRight:'1em'}}>
                                     <Typography sx={{color:'red',fontWeight:'bold'}}>{t('teknikdestek')}</Typography>
                                </Stack>
                            </Grid>
                    </Grid>
                </Stack>
            </Grid>
        </Grid>
    </Box>
  )
}
export default Login;