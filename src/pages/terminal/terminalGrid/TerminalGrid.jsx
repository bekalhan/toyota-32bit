import React from 'react';
import {
    Box,Grid, Typography,Stack
  } from '@mui/material';
import { useNavigate } from "react-router-dom";
import '../../../index.css';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@mui/material';

function TerminalGrid({terminalList}) {
    //navigate and mulit language
    const navigate = useNavigate();
    const {t,i18n} = useTranslation();
    //mui theme
    const theme = useTheme();

  return (
    <Box sx={{paddingTop:'3em'}}>
    <Grid container>
       <Grid item lg={12} md={12} sm={12} xs={12} sx={{border:`1px solid ${theme.palette.custom.borderColor}`}}>
         <Box sx={{display:'flex',justifyContent:'center',padding:1}}>
             <Typography sx={{textDecoration:'underline',color:'#d23d42',fontSize:{lg:'15px'}}}>{t('tumterminaller')}</Typography>
         </Box>
       </Grid>
       <Grid item lg={12} md={12} sm={12} xs={12}>
           <Grid container sx={{marginTop:'0.2px',display:'flex',flexDirection:i18n.language === "ae" ? 'row-reverse':'row'}}>
             <Grid item lg={2} md={2} sm={4} xs={4} sx={{border:`1px solid ${theme.palette.custom.borderColor}`,padding:0.5}}>
               <Box sx={{display:'flex',justifyContent:'center'}}>
                   <Typography sx={{color:'#d23d42',fontSize:{lg:'15px'}}}>{t('bolumbazinda')}</Typography>
               </Box>
             </Grid>
             <Grid item lg={10} md={10} sm={8} xs={8} sx={{border:`1px solid ${theme.palette.custom.borderColor}`,padding:0.5}}>
                 <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Typography sx={{color:'#d23d42',fontSize:{lg:'15px'}}}>{t('filtrebazinda')}</Typography>
                 </Box>
             </Grid>
           </Grid>
       </Grid>
       {terminalList?.map((terminal,index)=>(
            <Grid key={index} item lg={12} md={12} sm={12} xs={12} sx={{cursor:'pointer'}}>
                <Grid container sx={{marginTop:'0.2px',display:'flex',flexDirection:i18n.language === "ae" ? 'row-reverse':'row'}}>
                    <Grid item lg={2} md={2} sm={12} xs={12} sx={{border:`1px solid ${theme.palette.custom.borderColor}`}} className='terminal'
                    >
                    <Box sx={{display:'flex',justifyContent:'center'}}>
                        <Typography sx={{color:'#d34555',fontSize:{lg:'15px'},marginTop:{lg:'1.5em',md:'0.7em',sm:'0'}}}>({terminal?.depCode}){terminal?.depName}</Typography>
                    </Box>
                    </Grid>
                    <Grid item lg={10} md={10} sm={12} xs={12} sx={{border:`1px solid ${theme.palette.custom.borderColor}`,padding:0.4,display:'flex'}} >
                        <Grid container sx={{justifyContent:{lg:'flex-start',md:'flex-start',sm:'center',xs:'center'}}}>
                        {terminal?.filterBaseds?.map((e,index)=>(
                        <Grid item lg={1.6} md={2} sm={3} xs={3} key={index} sx={{borderRadius:'10px',border:`1px solid ${theme.palette.custom.borderColor}`,height:'50px',marginTop:'0.4em',marginLeft:'0.7em'}} className='terminal'
                        onClick={()=> navigate(`/cvqsterminal/terminal/${terminal?.depCode}/${e?.filterCode}`)}
                        >
                            <Stack direction='column'>
                                <Box sx={{height:'15px'}}>
                                    {e?.linkCount > 1 ? (
                                        <Box sx={{backgroundColor:'#d41921',width:{lg:'20px',md:'18px',sm:'18px',xs:'20px'},marginLeft:'auto',borderRadius:'8px',display:'flex',justifyContent:'center',height:{lg:'15px',md:'15px',sm:'17px',xs:'19px'},position:'relative',paddingBottom:{lg:'0.2em',md:'0.2em'}}}><Typography sx={{color:'white',marginBottom:{lg:'1em',md:'1em'},fontSize:'13px',fontWeight:'bold'}}>{e?.linkCount}</Typography></Box>
                                    ):(
                                        null
                                    )}
                                </Box>
                                <Box sx={{height:'35px',display:'flex',justifyContent:'center'}}>
                                     <Typography sx={{color:'#090101',fontSize:{lg:'15px',md:'14px'},fontWeight:'bold',justifyContent:'center'}}>{e.filterCode}</Typography>
                                </Box>
                            </Stack>
                         </Grid>
                        ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
       ))}
    </Grid>
 </Box>
  )
}
export default TerminalGrid;