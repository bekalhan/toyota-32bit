import { height } from '@mui/system';
import React, { useRef, useState, useEffect } from 'react';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../../../index.css";




function KeyboardTr({inputName,formik,setInputs,inputs,keyboard}) {
  const [layoutName, setLayoutName] = useState("default");
  
  useEffect(()=>{
    patchAll();
  },[inputs]);

  const patchAll = () =>{
    if(inputName=="sicil_no"){
      formik.setFieldValue("sicil_no",inputs.sicil_no);
    }else if(inputName=="sifre"){
      formik.setFieldValue("sifre",inputs.sifre);
    }else if(inputName=="montaj_no"){
      formik.setFieldValue("montaj_no",inputs.montaj_no);
    }
  }

  const onChangeAll = (inputs) => {
    setInputs({...inputs});
    if(inputName=="sicil_no"){
      formik.setFieldValue("sicil_no",inputs.sicil_no);
    }else if(inputName=="sifre"){
      formik.setFieldValue("sifre",inputs.sifre);
    }else if(inputName=="montaj_no"){
      formik.setFieldValue("montaj_no",inputs.montaj_no);
    }
  };

  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };

  const onKeyPress = (button) => {
    
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  return (
    <>
    <Keyboard
    keyboardRef={(r) => (keyboard.current = r)}
    inputName={inputName}
    layoutName={layoutName}
    onChangeAll={onChangeAll}
    onKeyPress={onKeyPress}
    theme={"hg-theme-default myTheme1"}
    layout={{
        default: [
            '" 1 2 3 4 5 6 7 8 9 0 * - # {bksp}',
            "{tab} q w e r t y u ı o p ğ ü [ ]",
            "{lock} a s d f g h j k l ş i , {enter}",
            "{shift} < z x c v b n m ö ç . | $ € {shift}",
            ".com @ {space}",
          ],
          shift: [
            "é ! ' ^ + % & / ( ) = ? _ ~ {bksp}",
            "{tab} Q W E R T Y U I O P Ğ Ü { }",
            "{lock} A S D F G H J K L Ş İ ; {enter}",
            "{shift} > Z X C V B N M Ö Ç : \\ ` ´ {shift}",
            ".com @ {space}",
          ],
    }}
    />
    </>
  )
}

export default KeyboardTr;