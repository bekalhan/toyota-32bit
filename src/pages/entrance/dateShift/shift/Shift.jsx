import React from 'react';
import { Box,Stack,FormControl,MenuItem,Select } from '@mui/material';
import '../../../../index.css';
import {useTranslation} from 'react-i18next';


function Shift({formik,shifts}) { 
  const {t,i18n} = useTranslation();

  return (
    <Stack direction='row'>
        <Box>
            <div className='txt-vardiya'>{t('vardiya')}</div>
        </Box>
         <Box>
             <FormControl className='list'>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formik.values.vardiya}
                    onChange={formik.handleChange("vardiya")}
                    onBlur={formik.handleBlur("vardiya")}
                    sx={{width:{lg:'100px',md:'80px'},height:{lg:'55px',md:'55px',sm:'42px',xs:'40px'},marginTop:{lg:'0',md:'10px',sm:'10px',xs:'10px'}}}
                    >
                      {shifts?.map((shift)=>(
                        <MenuItem value={shift.shiftCode} key={shift.shiftId}>{shift.shiftCode}</MenuItem>
                      ))}
                    </Select>
            </FormControl>
         </Box>
    </Stack>
  )
}

export default Shift;