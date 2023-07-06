import React from 'react';
import { Box,Stack,FormControl,MenuItem,Select } from '@mui/material';
import '../../../../index.css';
import {useTranslation} from 'react-i18next';


function Shift({formik,shifts}) { 
  const {t} = useTranslation();

  return (
    <Stack direction='row'>
      {/* SHİFTS */}
        <Box>
            <div className='txt-vardiya'>{t('vardiya')}</div>
        </Box>
         <Box>
             <FormControl className='list'>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formik.values.shift}
                    onChange={formik.handleChange("shift")}
                    onBlur={formik.handleBlur("shift")}
                    sx={{width:{lg:'100px',md:'80px'},height:{lg:'55px',md:'55px',sm:'40px',xs:'40px'},marginTop:{lg:'0',md:'0em',sm:'0.3em',xs:'0.3em'}}}
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