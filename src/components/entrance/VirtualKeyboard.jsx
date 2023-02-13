import React from 'react';
import KeyboardTr from '../../utils/keyboard/tr/KeyboardTr';
import KeyboardFr from '../../utils/keyboard/fr/KeyboardFr';
import KeyboardAe from '../../utils/keyboard/ae/KeyboardAe';
import KeyboardEn from '../../utils/keyboard/en/KeyboardEn';

function VirtualKeyboard({inputName,formik,setInputs,inputs,keyboard}) {

  return (
    <>
    <KeyboardTr
     inputName={inputName}
     formik={formik}
     setInputs={setInputs}
     inputs={inputs}
     keyboard={keyboard}
      />
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