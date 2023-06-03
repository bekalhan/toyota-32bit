import { Box } from '@mui/material';
import React, {useState, useEffect } from 'react';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../../index.css";

function NumericKeyboard({inputName,formik,setInputs,inputs,keyboard}) {
  const [layoutName, setLayoutName] = useState("default");
  
  useEffect(()=>{
    const patchAll = () =>{
      if(inputName==="s_no"){
        formik.setFieldValue("s_no",inputs.s_no);
      }else if(inputName==="password"){
        formik.setFieldValue("password",inputs.password);
      }else if(inputName==="m_no"){
        formik.setFieldValue("m_no",inputs.m_no);
      }
    }
    patchAll();
  },[inputs]);



  const onChangeAll = (inputs) => {
    setInputs({...inputs});
    if(inputName==="s_no"){
      formik.setFieldValue("s_no",inputs.s_no);
    }else if(inputName==="password"){
      formik.setFieldValue("password",inputs.password);
    }else if(inputName==="m_no"){
      formik.setFieldValue("m_no",inputs.m_no);
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

    <Box sx={{width:'600px',marginTop:'1em',ackgroundColor:'red'}}>
    <Keyboard
    keyboardRef={(r) => (keyboard.current = r)}
    inputName={inputName}
    layoutName={layoutName}
    onChangeAll={onChangeAll}
    onKeyPress={onKeyPress}
    theme={"hg-theme-default myTheme1"}
    layout={{
        default: [
            '7 8 9',
            "5 6 7",
            "1 2 3",
            ". 0 -",
            "{bksp}",
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
    </Box>
  )
}

export default NumericKeyboard;