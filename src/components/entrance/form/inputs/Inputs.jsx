import React,{useState,useRef,useEffect} from 'react';
import {
    Grid,
    Box,
    Typography,
    TextField
} from '@mui/material';

function Inputs({formik}) {
    const [inputName, setInputName] = useState("");
    const [inputs, setInputs] = useState({});

    const keyboard = useRef();

    const onChangeInput = (event) => {
        const inputVal = event.target.value;
    
        setInputs({
          ...inputs,
          [inputName]: inputVal
        });    
        keyboard.current.setInput(inputVal);
    };
  return (
    <>
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
        <Box sx={{display:'flex',marginTop:'1em'}}>
                                <Typography sx={{marginLeft:{lg:'9rem',md:'8rem',sm:'6.2rem',xs:'1.5rem'},color:'red'}}>{formik.touched.sicil_no && formik.errors.sicil_no}</Typography>
        </Box>
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
        <Box sx={{display:'flex',marginTop:'1em'}}>
                                <Typography sx={{marginLeft:{lg:'9rem',md:'8rem',sm:'6.2rem',xs:'1.5rem'},color:'red'}}>{formik.touched.sifre && formik.errors.sifre}</Typography>
        </Box>
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
        <Box sx={{display:'flex',marginTop:'1em'}}>
                                <Typography sx={{marginLeft:{lg:'9rem',md:'8rem',sm:'6.2rem',xs:'1.5rem'},color:'red'}}>{formik.touched.montaj_no && formik.errors.montaj_no}</Typography>
        </Box>
    </>
  )
}

export default Inputs;