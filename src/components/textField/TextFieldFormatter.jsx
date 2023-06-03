import React from 'react';
import {TextField} from '@mui/material';
import '../../index.css';
import { Box,useTheme } from '@mui/material';

function TextFieldFormatter({formik,name,setInputName,onChangeInput}) {
  const theme = useTheme();
  return (
    <>
        <Box sx={{display:{lg:'block',md:'block',sm:'none',xs:'none'}}}>
            <TextField
            value={formik.values[name]}
            onBlur={formik.handleBlur(name)}
            onChange={onChangeInput}
            onFocus={() => setInputName(name)}
            type={name === "password" ? 'password' : name}
            className='txt-field' variant="outlined" sx={{backgroundColor:name === "m_no" ? theme.palette.custom.light : theme.palette.custom.grey}} />
        </Box>
        <Box sx={{display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
            <TextField
            value={formik.values[name]}
            onBlur={formik.handleBlur(name)}
            onChange={onChangeInput}
            onFocus={() => setInputName(name)}
            type={name === "password" ? 'password' : name}
            size="small"
            className='txt-field' variant="outlined" sx={{backgroundColor:name === "m_no" ? theme.palette.custom.light : theme.palette.custom.grey}} />
        </Box>
    </>

  )
}

export default TextFieldFormatter