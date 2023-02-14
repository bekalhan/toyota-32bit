import React, { useRef, useState, useEffect } from 'react';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../../../index.css";




function KeyboardFr({inputName,formik,setInputs,inputs,keyboard}) {
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
    console.log("inputs : ",inputs);
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

  console.log("geeelen :",inputs);

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
            "\u0630 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "{tab} \u0636 \u0635 \u062B \u0642 \u0641 \u063A \u0639 \u0647 \u062E \u062D \u062C \u062F \\",
            "{lock} \u0634 \u0633 \u064A \u0628 \u0644 \u0627 \u062A \u0646 \u0645 \u0643 \u0637 {enter}",
            "{shift} \u0626 \u0621 \u0624 \u0631 \u0644\u0627 \u0649 \u0629 \u0648 \u0632 \u0638 {shift}",
            ".com @ {space}",
          ],
          shift: [
            "\u0651 ! @ # $ % ^ & * ) ( _ + {bksp}",
            "{tab} \u064E \u064B \u064F \u064C \u0644\u0625 \u0625 \u2018 \u00F7 \u00D7 \u061B < > |",
            '{lock} \u0650 \u064D ] [ \u0644\u0623 \u0623 \u0640 \u060C / : " {enter}',
            "{shift} ~ \u0652 } { \u0644\u0622 \u0622 \u2019 , . \u061F {shift}",
            ".com @ {space}",
          ],
    }}
    />
    </>
  )
}

export default KeyboardFr;