import React from 'react';
import KeyboardTr from '../../utils/keyboard/tr/KeyboardTr';
import KeyboardFr from '../../utils/keyboard/fr/KeyboardFr';
import KeyboardAe from '../../utils/keyboard/ae/KeyboardAe';
import KeyboardEn from '../../utils/keyboard/en/KeyboardEn';
import {Grid} from '@mui/material';

function VirtualKeyboard({inputName,formik,setInputs,inputs,keyboard,language}) {

  console.log("dil : ",language);

  return (
    <>
     <Grid container sx={{marginTop:{lg:'1em',md:'1em',sm:'1em',xs:'1em'},width:'100%',height:'200px',backgroundColor:'#eaeaea'}}>
       <Grid item lg={12} md={12} sm={12} xs={12}>
       {language==="tr" ? (
             <KeyboardTr
             inputName={inputName}
             formik={formik}
             setInputs={setInputs}
             inputs={inputs}
             keyboard={keyboard}
             />
      ) : language==="en" ? (
        <KeyboardEn
        inputName={inputName}
        formik={formik}
        setInputs={setInputs}
        inputs={inputs}
        keyboard={keyboard} 
      />
      ): language==="fr" ?(
        <KeyboardFr
        inputName={inputName}
        formik={formik}
        setInputs={setInputs}
        inputs={inputs}
        keyboard={keyboard}
        />
      ):language==="ae" ? (
        <KeyboardAe
        inputName={inputName}
        formik={formik}
        setInputs={setInputs}
        inputs={inputs}
        keyboard={keyboard}
        />
      ):null}
       </Grid>
     </Grid>
    </>
  )
}

export default VirtualKeyboard