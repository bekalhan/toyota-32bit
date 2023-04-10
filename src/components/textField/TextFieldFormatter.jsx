import React from 'react';
import {TextField} from '@mui/material';
import '../../index.css';
import { Box } from '@mui/system';

function TextFieldFormatter({formik,name,setInputName,onChangeInput}) {
  return (
    <>
        <Box sx={{display:{lg:'block',md:'block',sm:'none',xs:'none'}}}>
            <TextField
            value={formik.values[name]}
            onBlur={formik.handleBlur(name)}
            onChange={onChangeInput}
            onFocus={() => setInputName(name)}
            className='txt-field' variant="outlined" sx={{backgroundColor:'#e8f0fd'}} />
        </Box>
        <Box sx={{display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
            <TextField
            value={formik.values[name]}
            onBlur={formik.handleBlur(name)}
            onChange={onChangeInput}
            onFocus={() => setInputName(name)}
            size="small"
            className='txt-field' variant="outlined" sx={{backgroundColor:'#e8f0fd'}} />
        </Box>
    </>

  )
}

export default TextFieldFormatter