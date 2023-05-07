import React from 'react';
import {
    AppBar,Toolbar,Stack, Box, Typography
  } from '@mui/material';
  import DrawerMenu from '../../utils/DrawerMenu';
  import {Outlet} from 'react-router-dom';
  import {useTranslation} from 'react-i18next';
  import LanguageIcon from '@mui/icons-material/Language';
  import ChangeLanguage from '.././../utils/changeLanguage/ChangeLanguage';

function Header() {
  const {t,i18n} = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ChangeLanguage open={open} handleClose={handleClose} />
        <AppBar position='relative'>
          <Toolbar sx={{display:'flex',justifyContent:{lg:'space-between',md:'space-between',sm:'space-between',xs:'center'},backgroundColor:'#c6ffc7'}}>
              <Stack direction='column' sx={{justifyContent:'center'}}>
                <Typography sx={{color:'black',fontSize:{lg:'22px',md:'20px',sm:'18px',xs:'22px'},marginTop:{xs:'0.3em'}}}>
                  Complete Vehicle Quality
                </Typography>
                <Box sx={{display:'flex',justifyContent:'center',marginTop:'0.3em',marginBottom:'0.3em'}}>
                  <DrawerMenu />
                </Box>
              </Stack>
              <Stack direction="row" sx={{color:'red',display:{lg:'flex',md:'flex',sm:'flex',xs:'none'}}}>
              <Stack direction="row" sx={{marginLeft:'1em',cursor:'pointer'}} onClick={()=>handleOpen()}>
                    <LanguageIcon />
                    {i18n.language === 'tr' ?(<Typography >{t('headerdilturk')}</Typography>) : i18n.language === 'en' ? (<Typography >{t('headerdiling')}</Typography>): 
                    i18n.language === 'fr' ? (<Typography>{t('headerdilfra')}</Typography>) : i18n.language === 'ae' ? (<Typography>{t('headerdilara')}</Typography>):null}
                </Stack>
                <Box sx={{marginLeft:'1em'}}><Typography sx={{fontSize:{lg:'13px',md:'12px',sm:'11px'}}}>{t('yardim')}</Typography></Box>
                <Box sx={{marginLeft:'1em'}}><Typography sx={{fontSize:{lg:'13px',md:'12px',sm:'11px'}}}>{t('anasayfa')}</Typography></Box>
                <Box sx={{marginLeft:'1em'}}><Typography sx={{fontSize:{lg:'13px',md:'12px',sm:'11px'}}}>{t('destek')}</Typography></Box>
              </Stack>
          </Toolbar>
      </AppBar>
      <Outlet />
    </>
  )
}
export default Header;