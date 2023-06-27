import React,{useRef} from 'react';
import { Grid,FormControlLabel,Checkbox,FormControl,Button , TextField, Typography,Box,Modal,Stack, Select} from '@mui/material';
import {getDefectButtonData,getDefectButtonData2} from '../../../../redux/slices/defectSlices';
import { useState } from 'react';
import VirtualKeyboard from '../../../../components/keyboard/VirtualKeyboard';
import * as Yup from "yup";
import { useFormik } from "formik";
import ValidationMessages from '../../../../components/messages/ValidationMessages';
import {toast} from 'react-toastify';
import {useRedux} from '../../../../hooks/useRedux';
import {useSelect} from '../../../../hooks/useSelect';
import SelectFormatter from '../../../../components/select/SelectFormatter';
import Loading from '../../../../utils/loading/Loading';
import {useTranslation} from 'react-i18next';


//MODAL STYLE
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height:'80%',
    bgcolor: '#c6ffc7',
    border: '0px transparent gray',
    p: 4,
    borderRadius:'10px',
    overflow:'auto'
  };  

  // yup schema
const formSchema = Yup.object({
  desc : Yup.string().required("Lütfen bir açıklama giriniz"),
  transaction : Yup.string().required("Lütfen yapılan işlemi giriniz"),
});

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ModalComponent({open,handleClose}) {
  const [inputName, setInputName] = useState("");
  const [inputs, setInputs] = useState({});


  //keyboard useref
  const keyboard = useRef();

  //formik
  const formik = useFormik({
        initialValues: {
        desc: "",
        transaction: "",
        },
        onSubmit: values => {
          values.defectRes = select.defectRes;
          values.defectReason = select.defectReason;
          values.defectClass = select.defectClass;
          values.defectExit = select.defectExit;
          values.defectSub = select.defectSub;
          showToast();
          setTimeout(()=>{
            window.location.reload();   
          },6000);
          console.log("Hata giriş ekranı gönderilen veriler :  ",values);
        },
        validationSchema: formSchema,
    });

  //use redux custom hook
  let defectButtonData = useRedux({name:"defect",data:"defectButtonData",slice:getDefectButtonData()});
  let defectButtonData2 = useRedux({name:"defect",data:"defectButtonData2",slice:getDefectButtonData2()});
  const {t,i18n} = useTranslation();

  //select custom hook
  const [select,setSelect] = useSelect({defectRes:[],defectReason:[],defectClass:[],defectExit:[],defectSub:[]});

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
  //toast
  const showToast = () => {
    toast.success("Hata kaydınız başarılı! Ana ekrana yönlendiriliyorsunuz");
  }

  return (
  defectButtonData?.length !== 0 && defectButtonData2.length !== 0 ?
  //Modal
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
    <form onSubmit={formik.handleSubmit}>
        <Grid container sx={{width:'100%'}}>
            <Grid container sx={{display:'flex'}}>
               <Grid item lg={6} md={6} sm={6} xs={6}>
                  <Typography variant='h5' sx={{fontWeight:'bold'}}>CVQS (TMMT)</Typography>
               </Grid>
               <Grid item lg={6} md={6} sm={6} xs={6} sx={{display:'flex',justifyContent:'flex-end'}}>
               <FormControlLabel
                label={t('sikgelenhata')}
                control={<Checkbox {...label} sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }} />}
            />
               </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={1.5} md={1.5} sm={1.5} xs={2}>
                   <Typography sx={{fontWeight:'bold'}}>{t('hatasorumlusu')}</Typography>
                </Grid>
                <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
                <Grid item lg={4} md={4} sm={4} xs={9}>
                    <FormControl sx={{width:'100%',backgroundColor:'white'}}>
                      <SelectFormatter name={"defectRes"}
                      select={select} onChange={setSelect}
                        list={defectButtonData?.Response?.data[0].requiredFieldsByInspectionDTOList[5]?.errDetailComboBoxValueDTOList}
                        value={"dataValue"} defaultName={defectButtonData?.Response?.data[0].requiredFieldsByInspectionDTOList[5]?.errDetailComboBoxValueDTOList[0]?.dataValue}
                        format={"40-40-40-40"}
                        />
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
                                <SelectFormatter name={"defectReason"}
                                select={select} onChange={setSelect}
                                list={defectButtonData2?.Response?.data[0]}
                                value={"nrReasonAbb"} defaultName={defectButtonData2?.Response?.data[0][0]?.nrReasonAbb} format={"40-40-40-40"}
                                />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                  <Grid item lg={1.5} md={1.5} sm={1.5} xs={2}>
                    <Typography sx={{fontWeight:'bold'}}>{t('hatasinifi')}</Typography>
                  </Grid>
                  <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
                  <Grid item lg={4} md={4} sm={9.5} xs={9}>
                      <FormControl sx={{width:'100%',backgroundColor:'white'}}>
                                  <SelectFormatter name={"defectClass"}
                                    select={select} onChange={setSelect}
                                    list={defectButtonData?.Response?.data[0].requiredFieldsByInspectionDTOList[4].errDetailComboBoxValueDTOList}
                                    value={"dataValue"} defaultName={defectButtonData?.Response?.data[0].requiredFieldsByInspectionDTOList[4].errDetailComboBoxValueDTOList[0]?.dataValue} 
                                    format={"40-40-40-40"}
                                    />
                    </FormControl>
                  </Grid>
                  <Grid item lg={2.6} md={2.6} sm={5.6} xs={5.6} sx={{marginLeft:'0.4em',marginTop:{lg:'0',md:'0',sm:'1em',xs:'1em'}}}>
                    <Button variant="contained" sx={{backgroundColor:'#d5141a',width:'100%'}}
                    type="submit"
                    >{t('kaydet')}</Button>
                  </Grid>
                  <Grid item lg={0.2} md={0.2} sm={0.2} xs={0.2}></Grid>
                  <Grid item lg={2.6} md={2.6} sm={5.6} xs={5.6} sx={{marginTop:{lg:'0',md:'0',sm:'1em',xs:'1em'}}}>
                  <Button variant="contained" sx={{backgroundColor:'#d5141a',width:'100%'}} onClick={()=>{window.location.reload()}}>{t('iptal')}</Button>
                  </Grid>
                  
            </Grid>
            <Grid container sx={{marginTop:'0.4em'}}>
              <Grid item lg={1.5} md={1.5} sm={2.5} xs={2} sx={{marginTop:'0.5em'}}>
                      <Typography sx={{fontWeight:'bold'}}>{t('exitdepartmant')}</Typography>
              </Grid>
              <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
              <Grid item lg={4} md={4} sm={8.5} xs={9}>
                      <FormControl sx={{width:'100%',backgroundColor:'white'}}>
                            <SelectFormatter name={"defectExit"}
                                    select={select} onChange={setSelect}
                                    list={defectButtonData?.Response?.data[0].requiredFieldsByInspectionDTOList[0].errDetailComboBoxValueDTOList}
                                    value={"dataValue"} defaultName={defectButtonData?.Response?.data[0]?.requiredFieldsByInspectionDTOList[0]?.errDetailComboBoxValueDTOList[0]?.dataValue}ü
                                    format={"40-40-40-40"}
                                    />
                    </FormControl>
              </Grid>
            </Grid>
            <Grid container sx={{marginTop:'0.4em'}}>
              <Grid item lg={1.5} md={1.5} sm={2.5} xs={2} sx={{marginTop:'0.5em'}}>
                        <Typography sx={{fontWeight:'bold'}}>{t('aciklama')}</Typography>
              </Grid>
              <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
              <Grid item lg={9.5} md={9.5} sm={8.5} xs={9}>
              <TextField
                value={formik.values.desc}
                onBlur={formik.handleBlur("desc")}
                onChange={onChangeInput}
                onFocus={() => setInputName("desc")}
                id="outlined-basic" label="örnek açıklama" variant="outlined" sx={{width:'100%',backgroundColor:'white'}} size='small' />

              </Grid>
            </Grid>
            <ValidationMessages formik={formik} name="desc" />
            <Grid container sx={{marginTop:'0.4em'}}>
              <Grid item lg={1.5} md={1.5} sm={2.5} xs={2} sx={{marginTop:'0.5em'}}>
                        <Typography sx={{fontWeight:'bold',color:'red'}}>{t('yapilanislem')} *</Typography>
              </Grid>
              <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
              <Grid item lg={9.5} md={9.5} sm={8.5} xs={9}>
              <TextField
                value={formik.values.transaction}
                onBlur={formik.handleBlur("transaction")}
                onChange={onChangeInput}
                onFocus={() => setInputName("transaction")}
                  id="outlined-basic" label="düzenleme yapıldı" variant="outlined" sx={{width:'100%',backgroundColor:'white'}} size='small' />
              </Grid>
            </Grid>
            <ValidationMessages formik={formik} name="transaction" />
            <Grid container sx={{marginTop:'0.4em'}}>
              <Grid item lg={1.5} md={1.5} sm={2.5} xs={2} sx={{marginTop:'0.5em'}}>
                      <Typography sx={{fontWeight:'bold',color:'red'}}>{t('altsorumlu')} *</Typography>
              </Grid>
              <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
              <Grid item lg={4} md={4} sm={8.5} xs={9}>
                    <FormControl sx={{width:'100%',backgroundColor:'white'}}>
                        <Select
                        sx={{height:'50px'}}
                        />
                    </FormControl>
              </Grid>
            </Grid>
            {/* Keybaord */}
            <Stack direction="column" sx={{display:'flex',justifyContent:'center',width:'100%'}}>
              <VirtualKeyboard inputName={inputName} formik={formik} setInputs={setInputs} inputs={inputs} keyboard={keyboard} language={i18n.language} />
            </Stack>
            <Box sx={{display:'flex',justifyContent:'space-between',width:'100%',marginTop:'5.5em'}}>
              <Typography sx={{color:'red',fontWeight:'bold'}}>{t('teknikdestek')}</Typography>
              <Typography>6.2.192-CVQSTerminal</Typography>
            </Box>
        </Grid>
    </form>
    </Box>
  </Modal> : <Loading />
  )
}
export default ModalComponent;