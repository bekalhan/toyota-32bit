import React,{useRef} from 'react';
import { 
  Grid,FormControlLabel,Checkbox,FormControl,Select,OutlinedInput,MenuItem, Button , TextField, Typography,Box,Modal
} from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import {getErrorButtonData,getErrorButtonData2} from '../../../../redux/slices/errorSlices';
import { useState } from 'react';
import VirtualKeyboard from '../../../../components/keyboard/VirtualKeyboard';
import * as Yup from "yup";
import { useFormik } from "formik";
import ValidationMessages from '../../../../utils/ValidationMessages';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height:'75%',
    bgcolor: '#c6ffc7',
    border: '0px transparent gray',
    p: 4,
    borderRadius:'10px',
    overflow:'auto'
  };  

  //Form schema
const formSchema = Yup.object({
  aciklama : Yup.string().required("Lütfen bir açıklama giriniz"),
  yapilanIslem : Yup.string().required("Lütfen yapılan işlemi giriniz"),
});

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ModalComponent({open,handleClose}) {
  const [defaultName,setDefaultName] = useState();
  const [errorRes,setErrorRes] = useState([]);
  const [errorReason,setErrorReason] = useState([]);
  const [errorClass,setErrorClass] = useState([]);
  const [errorExit,setErrorExit] = useState([]);
  const [errorSub,setErrorSub] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputs, setInputs] = useState({});

  //keyboard useref
  const keyboard = useRef();

  //formik
  const formik = useFormik({
        initialValues: {
        aciklama: "",
        yapilanIslem: "",
        },
        onSubmit: values => {
            //dispatch(userLogin(values));     
        },
        validationSchema: formSchema,
    });

  //redux
  const dispatch = useDispatch();
  const store = useSelector(store => store?.error);
  const {errorButtonData,errorButtonData2} = store;

  //useEffect
  useEffect(()=>{
    dispatch(getErrorButtonData());
    dispatch(getErrorButtonData2());
    setDefaultName();
  },[]);



  //change
  const handleChange = (event,name) => {
    const {
      target: { value },
    } = event;
    if(name==="errorRes"){
      setErrorRes(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    }else if(name==="errorReason"){
      setErrorReason(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    }else if(name==="errorClass"){
      setErrorClass(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    }else if(name==="errorExit"){
      setErrorExit(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    }else if(name==="errorSub"){
      setErrorSub(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    }
  };

  //for keyboard
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

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
        <Grid container sx={{width:'100%'}}>
            <Grid container sx={{display:'flex'}}>
               <Grid item lg={6} md={6} sm={6} xs={6}>
                  <Typography variant='h5' sx={{fontWeight:'bold'}}>CVQS (TMMT)</Typography>
               </Grid>
               <Grid item lg={6} md={6} sm={6} xs={6} sx={{display:'flex',justifyContent:'flex-end'}}>
               <FormControlLabel
                label="SIK GELEN HATA"
                control={<Checkbox {...label} sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }} />}
            />
               </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={1.5} md={1.5} sm={1.5} xs={2}>
                   <Typography sx={{fontWeight:'bold'}}>Hata Sorumlusu</Typography>
                </Grid>
                <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
                <Grid item lg={4} md={4} sm={4} xs={9}>
                      <FormControl sx={{width:'100%',backgroundColor:'white'}}>
                            <Select
                              labelId="demo-multiple-name-label"
                              id="demo-multiple-name"
                              value={errorRes}
                              onChange={(e)=>{handleChange(e,"errorRes")}}
                              input={<OutlinedInput />}
                              renderValue={(selected) => {
                                if (selected.length === 0) {
                                return <em>aöskdmlakndaksjl</em>;
                                }
                                return selected.join(', ');
                            }}
                              sx={{height:'40px'}}
                            >
                            <MenuItem disabled value="">
                                <em>{defaultName}</em>
                            </MenuItem>
                              {errorButtonData?.data?.Response?.data[0].requiredFieldsByInspectionDTOList[5]?.errDetailComboBoxValueDTOList.map((e) => (
                                  <MenuItem
                                  key={e?.dataCode}
                                  value={e?.dataValue}
                                  >
                                  {e?.dataValue}
                                  </MenuItem>
                              ))}
                            </Select>
                    </FormControl>
                </Grid>
                <Grid item lg={2.2} md={2.2} sm={2.2} xs={4}>
                <FormControlLabel
                      label="Harigami"
                      control={<Checkbox {...label} sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }} />}
                  />
                </Grid>
                <Grid item lg={3.3} md={3.3} sm={3.3} xs={8}>
                    <FormControl sx={{width:{lg:'200px',md:'200px',sm:'200px',xs:'300px'},backgroundColor:'white'}}>
                                <Select
                                  labelId="demo-multiple-name-label"
                                  id="demo-multiple-name"
                                  value={errorReason}
                                  onChange={(e)=>{handleChange(e,"errorReason")}}
                                  input={<OutlinedInput />}
                                  renderValue={(selected) => {
                                    if (selected.length === 0) {
                                    return <em>aöskdmlakndaksjl</em>;
                                    }
                                    return selected.join(', ');
                                }}
                                  sx={{height:'40px'}}
                                >
                                <MenuItem disabled value="">
                                    <em>{defaultName}</em>
                                </MenuItem>
                                  {errorButtonData2?.data?.Response?.data[0].map((e) => (
                                      <MenuItem
                                      key={e?.nrId}
                                      value={e?.nrReasonAbb}
                                      >
                                      {e?.nrReasonAbb}
                                      </MenuItem>
                                  ))}
                                </Select>
                        </FormControl>
                </Grid>

            </Grid>
            <Grid container>
                  <Grid item lg={1.5} md={1.5} sm={1.5} xs={2}>
                    <Typography sx={{fontWeight:'bold'}}>Hata Sınıfı</Typography>
                  </Grid>
                  <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
                  <Grid item lg={4} md={4} sm={9.5} xs={9}>
                      <FormControl sx={{width:'100%',backgroundColor:'white'}}>
                            <Select
                              labelId="demo-multiple-name-label"
                              id="demo-multiple-name"
                              value={errorClass}
                              onChange={(e)=>{handleChange(e,"errorClass")}}
                              input={<OutlinedInput />}
                              renderValue={(selected) => {
                                if (selected.length === 0) {
                                return <em>aöskdmlakndaksjl</em>;
                                }
                                return selected.join(', ');
                            }}
                              sx={{height:'40px'}}
                            >
                            <MenuItem disabled value="">
                                <em>{defaultName}</em>
                            </MenuItem>
                              {errorButtonData?.data?.Response?.data[0].requiredFieldsByInspectionDTOList[4].errDetailComboBoxValueDTOList.map((e) => (
                                  <MenuItem
                                  key={e?.dataCode}
                                  value={e?.dataValue}
                                  >
                                  {e?.dataValue}
                                  </MenuItem>
                              ))}
                            </Select>
                    </FormControl>
                  </Grid>
                  <Grid item lg={2.6} md={2.6} sm={5.6} xs={5.6} sx={{marginLeft:'0.4em',marginTop:{lg:'0',md:'0',sm:'1em',xs:'1em'}}}>
                    <Button variant="contained" sx={{backgroundColor:'#d5141a',width:'100%'}}>KAYDET</Button>
                  </Grid>
                  <Grid item lg={0.2} md={0.2} sm={0.2} xs={0.2}></Grid>
                  <Grid item lg={2.6} md={2.6} sm={5.6} xs={5.6} sx={{marginTop:{lg:'0',md:'0',sm:'1em',xs:'1em'}}}>
                  <Button variant="contained" sx={{backgroundColor:'#d5141a',width:'100%'}}>İPTAL</Button>
                  </Grid>
                  
            </Grid>
            <Grid container sx={{marginTop:'0.4em'}}>
              <Grid item lg={1.5} md={1.5} sm={2.5} xs={2} sx={{marginTop:'0.5em'}}>
                      <Typography sx={{fontWeight:'bold'}}>Exit Departmant</Typography>
              </Grid>
              <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
              <Grid item lg={4} md={4} sm={8.5} xs={9}>
                      <FormControl sx={{width:'100%',backgroundColor:'white'}}>
                            <Select
                              labelId="demo-multiple-name-label"
                              id="demo-multiple-name"
                              value={errorExit}
                              onChange={(e)=>{handleChange(e,"errorExit")}}
                              input={<OutlinedInput />}
                              renderValue={(selected) => {
                                if (selected.length === 0) {
                                return <em>aöskdmlakndaksjl</em>;
                                }
                                return selected.join(', ');
                            }}
                              sx={{height:'40px'}}
                            >
                            <MenuItem disabled value="">
                                <em>{defaultName}</em>
                            </MenuItem>
                              {errorButtonData?.data?.Response?.data[0].requiredFieldsByInspectionDTOList[0].errDetailComboBoxValueDTOList.map((e) => (
                                  <MenuItem
                                  key={e?.dataCode}
                                  value={e?.dataValue}
                                  >
                                  {e?.dataValue}
                                  </MenuItem>
                              ))}
                            </Select>
                    </FormControl>
              </Grid>
            </Grid>
            <Grid container sx={{marginTop:'0.4em'}}>
              <Grid item lg={1.5} md={1.5} sm={2.5} xs={2} sx={{marginTop:'0.5em'}}>
                        <Typography sx={{fontWeight:'bold'}}>Açıklama</Typography>
              </Grid>
              <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
              <Grid item lg={9.5} md={9.5} sm={8.5} xs={9}>
              <TextField
                value={formik.values.aciklama}
                onBlur={formik.handleBlur("aciklama")}
                onChange={onChangeInput}
                onFocus={() => setInputName("aciklama")}
                id="outlined-basic" label="örnek açıklama" variant="outlined" sx={{width:'100%',backgroundColor:'white'}} size='small' />
              </Grid>
            </Grid>
            <ValidationMessages formik={formik} name="aciklama" />
            <Grid container sx={{marginTop:'0.4em'}}>
              <Grid item lg={1.5} md={1.5} sm={2.5} xs={2} sx={{marginTop:'0.5em'}}>
                        <Typography sx={{fontWeight:'bold',color:'red'}}>Yapılan İşlem *</Typography>
              </Grid>
              <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
              <Grid item lg={9.5} md={9.5} sm={8.5} xs={9}>
              <TextField
                value={formik.values.yapilanIslem}
                onBlur={formik.handleBlur("yapilanIslem")}
                onChange={onChangeInput}
                onFocus={() => setInputName("yapilanIslem")}
                  id="outlined-basic" label="düzenleme yapıldı" variant="outlined" sx={{width:'100%',backgroundColor:'white'}} size='small' />
              </Grid>
            </Grid>
            <ValidationMessages formik={formik} name="yapilanIslem" />
            <Grid container sx={{marginTop:'0.4em'}}>
              <Grid item lg={1.5} md={1.5} sm={2.5} xs={2} sx={{marginTop:'0.5em'}}>
                      <Typography sx={{fontWeight:'bold',color:'red'}}>Alt Sorumlu *</Typography>
              </Grid>
              <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
              <Grid item lg={4} md={4} sm={8.5} xs={9}>
                      <FormControl sx={{width:'100%',backgroundColor:'white'}}>
                            <Select
                              labelId="demo-multiple-name-label"
                              id="demo-multiple-name"
                              value={errorSub}
                              onChange={(e)=>{handleChange(e,"errorSub")}}
                              input={<OutlinedInput />}
                              renderValue={(selected) => {
                                if (selected.length === 0) {
                                return <em>aöskdmlakndaksjl</em>;
                                }
                                return selected.join(', ');
                            }}
                              sx={{height:'40px'}}
                            >
                            </Select>
                    </FormControl>
              </Grid>
            </Grid>
            {/* Keybaord */}
            <Box sx={{display:'flex',justifyContent:'center',width:'100%'}}>
              <VirtualKeyboard inputName={inputName} formik={formik} setInputs={setInputs} inputs={inputs} keyboard={keyboard} />
            </Box>
        </Grid>
    </Box>
  </Modal>
  )
}

export default ModalComponent