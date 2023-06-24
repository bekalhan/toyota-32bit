import React from 'react';
import {Box,Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';


function ValidationMessages({formik,name}) {
    const {t} = useTranslation();

    const determineName = () =>{
        switch(name){
            case 's_no':
                return(
                    <Typography sx={{marginLeft:{lg:'9rem',md:'8rem',sm:'6.2rem',xs:'1.5rem'},color:'red'}}>{formik.touched.s_no && formik.errors.s_no}</Typography>
                )
            case 'password':
                return(
                    <Typography sx={{marginLeft:{lg:'9rem',md:'8rem',sm:'6.2rem',xs:'1.5rem'},color:'red'}}>{formik.touched.password && formik.errors.password}</Typography>
                )
            case 'm_no':
                return(
                    <Typography sx={{marginLeft:{lg:'9rem',md:'8rem',sm:'6.2rem',xs:'1.5rem'},color:'red'}}>{formik.touched.m_no && formik.errors.m_no}</Typography>
                )
            case 'invalid_credentials':
                return(
                    <Typography sx={{color:'red',marginBottom:'2em'}}>{t('tummesaj')}</Typography>
                )
            case 'desc':
                return(
                    <Typography sx={{color:'red',marginBottom:'2em'}}>{formik.touched.desc && formik.errors.desc}</Typography>
                )
            case 'transaction':
                return(
                    <Typography sx={{color:'red',marginBottom:'2em'}}>{formik.touched.transaction && formik.errors.transaction}</Typography>
                )
            default: return(
                ""
            )
        }
    }
  return (
    <Box sx={{display:'flex',marginTop:'1em'}}>
        {determineName()}
    </Box>
  )
}

export default ValidationMessages