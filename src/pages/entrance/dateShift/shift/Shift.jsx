import React from 'react';
import { Box,Stack,FormControl,MenuItem,Select, Typography } from '@mui/material';
import '../../../../index.css';


function Shift({formik,shifts}) { 
  return (
    <Stack direction='row'>
        <Box>
            <div className='txt-vardiya'>Vardiya</div>
        </Box>
         <Box>
             <FormControl sx={{display:{lg:'block',md:'block',sm:'none',xs:'none'}}} className='list'>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formik.values.vardiya}
                    onChange={formik.handleChange("vardiya")}
                    onBlur={formik.handleBlur("vardiya")}
                    sx={{width:{lg:'100px',md:'80px'}}}
                    >
                      {shifts?.map((shift)=>(
                        <MenuItem value={shift.shiftCode} key={shift.shiftId}>{shift.shiftCode}</MenuItem>
                      ))}
                    </Select>
            </FormControl>
            <FormControl sx={{marginLeft:{lg:'8em',md:'1em',sm:'1.3em',xs:'1em'},display:{lg:'none',md:'none',sm:'block',xs:'block'}}} className='list'>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formik.values.vardiya}
                    onChange={formik.handleChange("vardiya")}
                    onBlur={formik.handleBlur("vardiya")}
                    size="small"
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