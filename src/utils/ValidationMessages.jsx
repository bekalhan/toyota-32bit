import React from 'react';
import {Box,Typography} from '@mui/material';

function ValidationMessages({formik,name}) {

    const determineName = () =>{
        switch(name){
            case 'sicil_no':
                return(
                    <Typography sx={{marginLeft:{lg:'9rem',md:'8rem',sm:'6.2rem',xs:'1.5rem'},color:'red'}}>{formik.touched.sicil_no && formik.errors.sicil_no}</Typography>
                )
                break;
            case 'sifre':
                return(
                    <Typography sx={{marginLeft:{lg:'9rem',md:'8rem',sm:'6.2rem',xs:'1.5rem'},color:'red'}}>{formik.touched.sifre && formik.errors.sifre}</Typography>
                )
                break;
            case 'montaj_no':
                return(
                    <Typography sx={{marginLeft:{lg:'9rem',md:'8rem',sm:'6.2rem',xs:'1.5rem'},color:'red'}}>{formik.touched.montaj_no && formik.errors.montaj_no}</Typography>
                )
                break;
        }
    }
  return (
    <Box sx={{display:'flex',marginTop:'1em'}}>
        {determineName()}
    </Box>
  )
}

export default ValidationMessages