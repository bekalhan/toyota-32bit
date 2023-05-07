import React,{useState} from 'react';
import { Drawer , Box, Typography, IconButton , Stack} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ChangeLanguage from './changeLanguage/ChangeLanguage';
import LanguageIcon from '@mui/icons-material/Language';
import {useTranslation} from 'react-i18next';

function DrawerMenu() {
  const {t,i18n} = useTranslation();
  const [isDrawerOpen,setIsDrawerOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
    return (
      <Box sx={{display:{lg:'none',md:'none',sm:'none',xs:'block'}}}>
      <ChangeLanguage open={open} handleClose={handleClose} />
      <IconButton size='large' edge='start' aria-label='logo' onClick={()=> setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor='top' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)} sx={{marginTop:'100px'}}>
        <Box width='100%' height='200px' textAlign='center' role='presentation'>
          <MenuList>
            <MenuItem>
              <ListItemText>YARDIM</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>ANA SAYFA</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>DESTEK</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText sx={{display:'flex',justifyContent:'center'}}>
              <Stack direction="row" sx={{marginLeft:'1em',cursor:'pointer'}} onClick={()=>handleOpen()}>
                    <LanguageIcon />
                    {i18n.language === 'tr' ?(<Typography >{t('headerdilturk')}</Typography>) : i18n.language === 'en' ? (<Typography >{t('headerdiling')}</Typography>): 
                    i18n.language === 'fr' ? (<Typography>{t('headerdilfra')}</Typography>) : i18n.language === 'ae' ? (<Typography>{t('headerdilara')}</Typography>):null}
                </Stack>
              </ListItemText>
            </MenuItem>
          </MenuList>
        </Box>
      </Drawer>
      </Box>

  )
}

export default DrawerMenu