import React from 'react';
import { Box,Stack,FormControl,InputLabel,MenuItem,Select, Typography } from '@mui/material';




function Shift({formik,shiftList}) {
 
  return (
    <Stack direction='row'>
        <Box>
            <Typography sx={{marginTop:{lg:'2em',md:'1.6em',sm:'1.3em',xs:'1.3em'},fontWeight:'bold',marginLeft:{lg:'2em',md:'2em',sm:'1.2em',xs:'1em'}}}>Vardiya</Typography>
        </Box>
         <Box>
             <FormControl sx={{marginTop:{lg:'0.6em',md:'0.6em'},marginLeft:{lg:'8em',md:'1em'},display:{lg:'block',md:'block',sm:'none',xs:'none'}}}>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formik.values.vardiya}
                    onChange={formik.handleChange("vardiya")}
                    onBlur={formik.handleBlur("vardiya")}
                    >
                      {shiftList?.map((shift)=>(
                        <MenuItem value={shift.shiftCode}>{shift.shiftCode}</MenuItem>
                      ))}
                    </Select>
            </FormControl>
            <FormControl sx={{marginTop:{lg:'0.6em',md:'0.6em',sm:'0.7em',xs:'0.7em'},marginLeft:{lg:'8em',md:'1em',sm:'1.3em',xs:'1em'},display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formik.values.vardiya}
                    onChange={formik.handleChange("vardiya")}
                    onBlur={formik.handleBlur("vardiya")}
                    size="small"
                    >
                      {shiftList?.map((shift)=>(
                        <MenuItem value={shift.shiftCode}>{shift.shiftCode}</MenuItem>
                      ))}
                    </Select>
            </FormControl>
         </Box>
    </Stack>
  )
}

export default Shift