import React,{useRef,useState} from 'react';
import { Box, Grid, Typography,Divider,Stack,Button , TextField} from '@mui/material';
import * as Yup from "yup";
import { useFormik } from "formik";
import moment from 'moment';
import VirtualKeyboard from './keyboard/VirtualKeyboard';
import { useNavigate } from "react-router-dom";
import DateShift from './dateShift/DateShift';
import ValidationMessages from '../../utils/ValidationMessages';
import TerminalList from './form/terminal/TerminalList';
import { userLogin } from "../../redux/slices/loginSlices";
import { useDispatch , useSelector} from "react-redux";
import NumericKeyboard from './keyboard/NumericKeyboard';

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

    //selector
    const login = useSelector(store=>store?.login);
    const {user,loading} = login;

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
    <Box sx={{display:'flex',backgroundColor:'#c6ffc7',height:'2000px',width:{lg:'100%',md:'100%',sm:'100%',xs:'500px'}}}>

        <Grid container sx={{justifyContent:'center'}}>
            <Grid item lg={10} md={10} sm={12} xs={12} sx={{border:'2px solid #b7ecba',borderRadius:'12px',display:'flex',height:'1200px'}}>
                <Stack direction='column' sx={{width:'100%',display:'flex'}}>
                    <Box sx={{justifyContent:'center',display:'flex'}}>
                        <Typography sx={{color:'#d23d42',fontWeight:'bold',fontSize:{lg:'20px'},padding:1,cursor:'pointer'}}
                        onClick={()=> navigate(`/cvqsterminal/terminals`)}
                        >CVQS(TMMT)</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{padding:2}}>
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
                        <Grid container sx={{marginTop:'1rem'}}>
                                   <Grid item lg={1.6} md={1.6} sm={1.5} xs={0.5}></Grid>
                                    <Grid item lg={2.3} md={2.3} sm={2.6} xs={3}>
                                        <Typography sx={{fontWeight:'bold',marginTop:'0.6rem'}}>Sicil No</Typography>
                                    </Grid>
                                    <Grid item lg={7.5} md={7.5} sx={{display:{lg:'block',md:'block',sm:'none',xs:'none'}}}>
                                         <TextField
                                         value={formik.values.sicil_no}
                                         onBlur={formik.handleBlur("sicil_no")}
                                         onChange={onChangeInput}
                                         onFocus={() => setInputName("sicil_no")}
                                         id="outlined-basic" variant="outlined" sx={{width:{lg:'550px',md:'400px'},backgroundColor:'#e8f0fd'}} />
                                    </Grid>
                                    <Grid item sm={7.5} xs={7.5} sx={{display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
                                         <TextField
                                         value={formik.values.sicil_no}
                                         onBlur={formik.handleBlur("sicil_no")}
                                         onChange={onChangeInput}
                                         onFocus={() => setInputName("sicil_no")}
                                         size="small"
                                         id="outlined-basic" variant="outlined" sx={{width:{sm:'360px',xs:'320px'},backgroundColor:'#e8f0fd'}} />
                                    </Grid>
                       </Grid>
                       <ValidationMessages formik={formik} name="sicil_no" />
                       {/* sifre */}
                        <Grid container sx={{marginTop:'1rem'}}>
                                   <Grid item lg={1.6} md={1.6} sm={1.5} xs={0.5}></Grid>
                                    <Grid item lg={2.3} md={2.3} sm={2.6} xs={3}>
                                        <Typography sx={{fontWeight:'bold',marginTop:'0.6rem'}}>Şifre</Typography>
                                    </Grid>
                                    <Grid item lg={7.5} md={7.5} sx={{display:{lg:'block',md:'block',sm:'none',xs:'none'}}}>
                                         <TextField
                                        value={formik.values.sifre}
                                        onChange={onChangeInput}
                                        onBlur={formik.handleBlur("sifre")}
                                         onFocus={() => setInputName("sifre")}
                                        id="outlined-basic" variant="outlined" sx={{width:{lg:'550px',md:'400px'},backgroundColor:'#e8f0fd'}} />
                                    </Grid>
                                    <Grid item sm={7.5} xs={7.5} sx={{display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
                                         <TextField
                                        value={formik.values.sifre}
                                        onChange={onChangeInput}
                                        onBlur={formik.handleBlur("sifre")}
                                        onFocus={() => setInputName("sifre")}
                                        size="small"
                                         id="outlined-basic" variant="outlined" sx={{width:{sm:'360px',xs:'320px'},backgroundColor:'#e8f0fd'}} />
                                    </Grid>
                        </Grid>
                        {/* montaj No */}
                       <ValidationMessages formik={formik} name="sifre" />
                        <Grid container sx={{marginTop:'1rem'}}>
                                   <Grid item lg={1.6} md={1.6} sm={1.5} xs={0.5}></Grid>
                                    <Grid item lg={2.3} md={2.3} sm={2.6} xs={3}>
                                        <Typography sx={{fontWeight:'bold',marginTop:'0.6rem'}}>Montaj No</Typography>
                                    </Grid>
                                    <Grid item lg={8} md={8} sx={{display:{lg:'block',md:'block',sm:'none',xs:'none'}}}>
                                         <TextField
                                        value={formik.values.montaj_no}
                                        onChange={onChangeInput}
                                        onBlur={formik.handleBlur("montaj_no")}
                                        onFocus={() => setInputName("montaj_no")}
                                        id="outlined-basic" variant="outlined" sx={{width:{lg:'550px',md:'400px'},backgroundColor:'white'}} />
                                    </Grid>
                                    <Grid item sm={7.5} xs={7.5} sx={{display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
                                         <TextField
                                        value={formik.values.montaj_no}
                                        onChange={onChangeInput}
                                        onBlur={formik.handleBlur("montaj_no")}
                                        onFocus={() => setInputName("montaj_no")}
                                        size="small"
                                         id="outlined-basic" variant="outlined" sx={{width:{sm:'360px',xs:'320px'},backgroundColor:'white'}} />
                                    </Grid>
                        </Grid>
                        <ValidationMessages formik={formik} name="montaj_no" />
                        {/* Date and Shift */}
                        <DateShift formik={formik} />
                        {/* Buttons */}
                        <Grid container sx={{marginTop:'1em',height:{lg:'60px',md:'60px'}}}>
                                <Grid item lg={1} md={1.6} sm={1.6} xs={0.6}></Grid>
                                {loading?(
                                <Grid item lg={4} md={3.6} sm={4.4} xs={5}>
                                    <Button variant="contained" disabled sx={{width:'100%',height:'100%',borderRadius:'8px',fontWeight:'bold',fontSize:'18px',backgroundColor:'#000000',marginLeft:{lg:'3em'}}}>loading...</Button>
                                 </Grid>
                                ):(
                                <Grid item lg={4} md={3.6} sm={4.4} xs={5}>
                                    <Button variant="contained" type='submit' sx={{width:'100%',height:'100%',borderRadius:'8px',fontWeight:'bold',fontSize:'18px',backgroundColor:'#000000',marginLeft:{lg:'3em'}}}>GİRİŞ YAP</Button>
                                  </Grid>
                                )}

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
                        {/* Keybaord */}
                        <Box sx={{display:'flex',justifyContent:'center'}}>
                            {inputName ==="sicil_no" || inputName ==="sifre" || inputName=="" ? (
                                <VirtualKeyboard inputName={inputName} formik={formik} setInputs={setInputs} inputs={inputs} keyboard={keyboard}  />
                            ) : (
                                <NumericKeyboard inputName={inputName} formik={formik} setInputs={setInputs} inputs={inputs} keyboard={keyboard}  />
                            )}
                        </Box>
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