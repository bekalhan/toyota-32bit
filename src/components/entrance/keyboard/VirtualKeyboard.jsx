import React from 'react';
import KeyboardTr from '../../../utils/keyboard/tr/KeyboardTr';
import KeyboardFr from '../../../utils/keyboard/fr/KeyboardFr';
import KeyboardAe from '../../../utils/keyboard/ae/KeyboardAe';
import KeyboardEn from '../../../utils/keyboard/en/KeyboardEn';
import {Grid} from '@mui/material';
import GridFormatter from '../../../utils/GridFormatter';

function VirtualKeyboard({inputName,formik,setInputs,inputs,keyboard}) {

  return (
    <>
     <Grid container sx={{marginTop:{lg:'1em',md:'1em',sm:'1em',xs:'1em'},width:'100%',height:'200px',backgroundColor:'#eaeaea'}}>
       <GridFormatter format="12" content={
          <KeyboardTr
          inputName={inputName}
          formik={formik}
          setInputs={setInputs}
          inputs={inputs}
          keyboard={keyboard}
          />
       }></GridFormatter>
     </Grid>
    {/* <KeyboardFr
     inputName={inputName}
     formik={formik}
     setInputs={setInputs}
     inputs={inputs}
     keyboard={keyboard}
    /> */}
    {/* <KeyboardAe
     inputName={inputName}
     formik={formik}
     setInputs={setInputs}
     inputs={inputs}
     keyboard={keyboard}
    /> */}
    {/* <KeyboardEn
     inputName={inputName}
     formik={formik}
     setInputs={setInputs}
     inputs={inputs}
     keyboard={keyboard}
    
    /> */}
    </>
  )
}

export default VirtualKeyboard