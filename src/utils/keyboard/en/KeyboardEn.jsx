import React, { useState, useEffect } from 'react';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../../../index.css";



function KeyboardEn({inputName,formik,setInputs,inputs,keyboard}) {
  const [layoutName, setLayoutName] = useState("default");
  
  useEffect(()=>{
    patchAll();
  },[inputs]);
  
  const patchAll = () =>{
    if(inputName==="s_no"){
      formik.setFieldValue("s_no",inputs.s_no);
    }else if(inputName==="password"){
      formik.setFieldValue("password",inputs.password);
    }else if(inputName==="m_no"){
      formik.setFieldValue("m_no",inputs.m_no);
    }else if(inputName==="desc"){
      formik.setFieldValue("desc",inputs.desc);
    }else if(inputName==="transaction"){
      formik.setFieldValue("transaction",inputs.transaction);
    }
  }

  const onChangeAll = (inputs) => {
    setInputs({...inputs});
    if(inputName==="s_no"){
      formik.setFieldValue("s_no",inputs.s_no);
    }else if(inputName==="password"){
      formik.setFieldValue("password",inputs.password);
    }else if(inputName==="m_no"){
      formik.setFieldValue("m_no",inputs.m_no);
    }else if(inputName==="desc"){
      formik.setFieldValue("desc",inputs.desc);
    }else if(inputName==="transaction"){
      formik.setFieldValue("transaction",inputs.transaction);
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
            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "{tab} q w e r t y u i o p [ ] \\",
            "{lock} a s d f g h j k l ; ' {enter}",
            "{shift} z x c v b n m , . / {shift}",
            ".com @ {space}",
          ],
          shift: [
            "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
            "{tab} Q W E R T Y U I O P { } |",
            '{lock} A S D F G H J K L : " {enter}',
            "{shift} Z X C V B N M < > ? {shift}",
            ".com @ {space}",
          ],
    }}
    />
    </>
  )
}

export default KeyboardEn;