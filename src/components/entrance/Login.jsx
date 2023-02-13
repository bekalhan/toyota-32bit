import React,{useRef,useState} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSpeTerminal } from "../../redux/slices/terminalSlices";
import {useParams} from 'react-router-dom';
import { Box, Grid, Typography,Divider,Stack,TextField,Button, OutlinedInput,MenuItem,FormControl,Select} from '@mui/material';
import * as Yup from "yup";
import { useFormik , Field } from "formik";
import Date from './ChooseDate';
import Shift from './Shift';
import moment from 'moment';
import { getShifts } from "../../redux/slices/loginSlices";
import VirtualKeyboard from './VirtualKeyboard';


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
    const [personName, setPersonName] = useState([]);
    const [defaultName, setDefaultName] = useState('');
    const [inputName, setInputName] = useState("");
    const [inputs, setInputs] = useState({});

    const keyboard = useRef();


    //moment
    let current = moment().format('L').split('/'); 


    //redux for login
    const login = useSelector(state=>state?.login);
    const {shifts} = login;

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
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    //redux requirements
    const dispatch = useDispatch();
    const store = useSelector(state => state?.terminals);
    const {terminal} = store;

    //use react router params
    const params = useParams();

    //react hooks
    useEffect(()=>{
        dispatch(getShifts());
        dispatch(getSpeTerminal(params));
    },[]);
    useEffect(()=>{
        setName();
    },[terminal]);

    const setName = () =>{
        setDefaultName(terminal?.data?.Response?.filter_data[0]?.termName);
    }

    //keyboard
    const onChangeInput = (event) => {
        const inputVal = event.target.value;
    
        setInputs({
          ...inputs,
          [inputName]: inputVal
        });    
        keyboard.current.setInput(inputVal);
      };

    const backColor = () => {
        console.log("bak :",shifts?.data?.Response?.data)
       let color =  shifts?.data?.Response?.data?.map((el)=>(
            el?.shiftCode == formik?.values?.vardiya ? el.rgbColor : 'red'
        ))
        console.log("color :",color);
        return color;
    }

      console.log("aaaa :",shifts?.data);
      console.log("vardiya : ",formik?.values?.vardiya);

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
                            {/* terminal List */}
                            <Grid container>
                                <Grid item lg={1.6} md={1.6} sm={1.5} xs={0.5}></Grid>
                                <Grid item lg={2.3} md={2.3} sm={2.6} xs={3} sx={{display:'flex',justifyContent:'flex-start'}}>
                                    <Typography sx={{fontWeight:'bold',marginTop:{lg:'0.6em',md:'0.6em',sm:'0.6em',xs:'0.6em'}}}>Terminal Listesi</Typography>
                                </Grid>
                                <Grid item lg={7.5} md={7.5} sm={7.2} xs={7.5}>
                                    {/* select dropdown */}
                                    <FormControl sx={{ width:{lg:'550px',md:'400px',sm:'360px',xs:'320px'}}}>
                                                <Select
                                                displayEmpty
                                                value={personName}
                                                onChange={handleChange}
                                                input={<OutlinedInput />}
                                                renderValue={(selected) => {
                                                    if (selected.length === 0) {
                                                    return <em>{defaultName}</em>;
                                                    }

                                                    return selected.join(', ');
                                                }}
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{height:{lg:'50px',md:'50px',sm:'40px',xs:'40px'}}}
                                                >
                                                <MenuItem disabled value="">
                                                    <em>{defaultName}</em>
                                                </MenuItem>
                                                {terminal?.data?.Response?.filter_data?.map((e) => (
                                                    <MenuItem
                                                    key={e.termName}
                                                    value={e.termName}
                                                    >
                                                    {e.termName}
                                                    </MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>
                                    {/* select dropdown end */}
                                </Grid>
                            </Grid>
                            {/* terminal list end */}
                            {/* sicil no */}
                            <Grid container sx={{marginTop:{lg:'1em',md:'1em',sm:'1em',xs:'1em'}}}>
                                   <Grid item lg={1.6} md={1.6} sm={1.5} xs={0.5}></Grid>
                                    <Grid item lg={2.3} md={2.3} sm={2.6} xs={3} sx={{display:'flex',justifyContent:'flex-start'}}>
                                        <Typography sx={{fontWeight:'bold',marginTop:{lg:'0.6em',md:'0.6em',sm:'0.6em'}}}>Sicil No</Typography>
                                    </Grid>
                                    <Grid item lg={7.5} md={7.5} sx={{display:{lg:'block',md:'block',sm:'none',xs:'none'}}}>
                                         <TextField
                                         value={formik.values.sicil_no}
                                         onBlur={formik.handleBlur("sicil_no")}
                                         onChange={onChangeInput}
                                         onFocus={() => setInputName("sicil_no")}
                                         id="outlined-basic" variant="outlined" sx={{width:{lg:'550px',md:'400px',sm:'320px'},backgroundColor:'#e8f0fd'}} />
                                    </Grid>
                                    <Grid item lg={7.5} md={7.5} sm={7.5} xs={7.5} sx={{display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
                                         <TextField
                                         value={formik.values.sicil_no}
                                         onBlur={formik.handleBlur("sicil_no")}
                                         onChange={onChangeInput}
                                         onFocus={() => setInputName("sicil_no")}
                                         size="small"
                                         id="outlined-basic" variant="outlined" sx={{width:{lg:'550px',md:'400px',sm:'360px',xs:'320px'},backgroundColor:'#e8f0fd'}} />
                                    </Grid>
                            </Grid>
                            <Box sx={{display:'flex',marginTop:'1em'}}>
                                <Typography sx={{marginLeft:{lg:'9rem'},color:'red'}}>{formik.touched.sicil_no && formik.errors.sicil_no}</Typography>
                             </Box>
                             {/* sicil no end */}
                             {/* sifre  */}
                            <Grid container sx={{marginTop:{lg:'1em',md:'1em',sm:'1em',xs:'1em'}}}>
                                   <Grid item lg={1.6} md={1.6} sm={1.5} xs={0.5}></Grid>
                                    <Grid item lg={2.3} md={2.3} sm={2.6} xs={3} sx={{display:'flex',justifyContent:'flex-start'}}>
                                        <Typography sx={{fontWeight:'bold',marginTop:{lg:'0.6em',md:'0.6em',sm:'0.6em'}}}>Şifre</Typography>
                                    </Grid>
                                    <Grid item lg={7.5} md={7.5} sm={7.5} sx={{display:{lg:'block',md:'block',sm:'none',xs:'none'}}}>
                                         <TextField
                                        value={formik.values.sifre}
                                        onChange={onChangeInput}
                                        onBlur={formik.handleBlur("sifre")}
                                        onFocus={() => setInputName("sifre")}
                                         id="outlined-basic" variant="outlined" sx={{width:{lg:'550px',md:'400px',sm:'380px'},backgroundColor:'#e8f0fd'}} />
                                    </Grid>
                                    <Grid item lg={7.5} md={7.5} sm={7.5} xs={7.5} sx={{display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
                                         <TextField
                                        value={formik.values.sifre}
                                        onChange={onChangeInput}
                                        onBlur={formik.handleBlur("sifre")}
                                        onFocus={() => setInputName("sifre")}
                                        size="small"
                                         id="outlined-basic" variant="outlined" sx={{width:{lg:'550px',md:'400px',sm:'360px',xs:'320px'},backgroundColor:'#e8f0fd'}} />
                                    </Grid>
                            </Grid>
                            <Box sx={{display:'flex',marginTop:'1em'}}>
                                <Typography sx={{marginLeft:{lg:'9rem'},color:'red'}}>{formik.touched.sifre && formik.errors.sifre}</Typography>
                             </Box>
                             {/* sifre end */}
                             {/* montaj no  */}
                            <Grid container sx={{marginTop:{lg:'1em',md:'1em',sm:'1em'}}}>
                                   <Grid item lg={1.6} md={1.6} sm={1.5} xs={0.5}></Grid>
                                    <Grid item lg={2.3} md={2.3} sm={2.6} xs={3} sx={{display:'flex',justifyContent:'flex-start'}}>
                                        <Typography sx={{fontWeight:'bold',marginTop:{lg:'0.6em',md:'0.6em',sm:'0.6em'}}}>Montaj No</Typography>
                                    </Grid>
                                    <Grid item lg={8} md={8} sm={8} sx={{display:{lg:'block',md:'block',sm:'none',xs:'none'}}}>
                                         <TextField
                                        value={formik.values.montaj_no}
                                        onChange={onChangeInput}
                                        onBlur={formik.handleBlur("montaj_no")}
                                        onFocus={() => setInputName("montaj_no")}
                                         id="outlined-basic" variant="outlined" sx={{width:{lg:'550px',md:'400px',sm:'380px'},backgroundColor:'white'}} />
                                    </Grid>
                                    <Grid item lg={8} md={8} sm={7.5} xs={7.5} sx={{display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
                                         <TextField
                                        value={formik.values.montaj_no}
                                        onChange={onChangeInput}
                                        onBlur={formik.handleBlur("montaj_no")}
                                        onFocus={() => setInputName("montaj_no")}
                                        size="small"
                                         id="outlined-basic" variant="outlined" sx={{width:{lg:'550px',md:'400px',sm:'360px',xs:'320px'},backgroundColor:'white'}} />
                                    </Grid>
                            </Grid>
                            <Box sx={{display:'flex',marginTop:'1em'}}>
                                <Typography sx={{marginLeft:{lg:'9rem'},color:'red'}}>{formik.touched.montaj_no && formik.errors.montaj_no}</Typography>
                             </Box>
                             {/* montaj no end */}
                             {/* date and shift */}
                            <Grid container sx={{marginTop:'1em',display:'flex'}}>
                                <Grid lg={1.5} md={1.5} sm={1.5} xs={0.3}></Grid>
                                <Grid lg={8.2} md={8.2} sm={9}>
                                    <Grid container
                                    backgroundColor={backColor}
                                    sx={{height:'80px',borderRadius:'12px',width:{lg:'790px',md:'600px',sm:'560px',xs:'510px'}}}>
                                        <Grid item lg={3.5} md={3.5} sm={3.5} xs={3.5} sx={{display:'flex',justifyContent:'flex-start'}}>
                                            <Typography sx={{fontWeight:'bold',marginTop:{lg:'0.6em',md:'0.6em'},marginTop:'1.5em',paddingLeft:{lg:'0.3em'}}}>Tarih</Typography>
                                        </Grid>
                                        <Grid item lg={8} md={8} sm={7} xs={7}>
                                            <Stack direction='row'>
                                                  <Date formik={formik} />
                                                  <Shift formik={formik} shiftList={shifts?.data?.Response?.data} />
                                            </Stack>
                                        </Grid>
                                        <Grid lg={0.5} md={0.5} sm={1.5} xs={1.5}></Grid>
                                    </Grid>
                                </Grid>
                                <Grid lg={2} md={2} sm={2}></Grid>
                            </Grid>
                            {/* end */}
                            <Grid container sx={{marginTop:{lg:'1em',md:'1em',sm:'1em',xs:'1em'},height:{lg:'60px',md:'60px'}}}>
                                <Grid lg={1} md={1.6} sm={1.6} xs={0.6}></Grid>
                                <Grid item lg={4} md={3.6} sm={4.4} xs={5}>
                                  <Button variant="contained" type='submit' sx={{width:'100%',height:'100%',borderRadius:'8px',fontWeight:'bold',fontSize:'18px',backgroundColor:'#000000',marginLeft:{lg:'3em'}}}>GİRİŞ YAP</Button>
                                </Grid>
                                <Grid item lg={1} md={0.4} sm={0.3} xs={0.2}></Grid>
                                <Grid lg={4} md={3.5} sm={4.4} xs={5}>
                                  <Button variant="contained" sx={{width:'100%',height:'100%',borderRadius:'8px',fontWeight:'bold',fontSize:'18px',backgroundColor:'#d31823'}}>KAPAT</Button>
                                </Grid>
                            </Grid>
                            <Grid container sx={{marginTop:{lg:'1em',md:'1em',sm:'1em',xs:'1em'},width:'100%',height:'200px',backgroundColor:'#eaeaea'}}>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <VirtualKeyboard inputName={inputName} formik={formik} setInputs={setInputs} inputs={inputs} keyboard={keyboard}  />
                                </Grid>
                            </Grid>
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