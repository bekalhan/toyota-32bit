import React from 'react';
import {
    AppBar,Toolbar,Stack, Box, Typography , Modal, Avatar, Button , RadioGroup , FormControl, FormControlLabel ,Radio
  } from '@mui/material';
  import DrawerMenu from '../../utils/DrawerMenu';
  import {Outlet} from 'react-router-dom';
  import {useTranslation} from 'react-i18next';
  import LanguageIcon from '@mui/icons-material/Language';
  import tr from '../../img/turk.png';
  import en from '../../img/ingiltere.png';
  import fr from '../../img/fransa.jpeg';
  import ae from '../../img/arap.png';

function Header() {
  const {t,i18n} = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(i18n.language);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 4,
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    i18n.changeLanguage(value);
    handleClose()
  }

  return (
    <>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center',color:'#6d51c3'}}>
            {t('dildegistir')} 
            </Typography>
            <form onSubmit={handleSubmit}>
            <FormControl sx={{width:'100%'}}>
            <RadioGroup
                defaultValue={value}
                onChange={handleRadioChange}
              >
            <Stack direction="column" sx={{marginTop:'1em'}}>
              <Box sx={{display:'flex',justifyContent:'space-between',width:'100%',border:'0.3px solid gray',borderRadius:'12px'}}>
                  <FormControlLabel value="tr" control={<Radio />} label={t('headerdilturk')} sx={{marginLeft:'0.4em',color:'#6d51c3'}} />
                  <Avatar variant='square' src={tr} sx={{padding:0.2,width:'60px',height:'30px',margin:0.3}} />
              </Box>
              <Box sx={{display:'flex',justifyContent:'space-between',width:'100%',border:'0.3px solid gray',borderRadius:'12px',marginTop:'0.3em'}}>
                  <FormControlLabel value="en" control={<Radio />} label={t('headerdiling')} sx={{marginLeft:'0.4em',color:'#6d51c3'}} />
                  <Avatar variant='square' src={en} sx={{padding:0.2,width:'60px',height:'30px',margin:0.3}} />
              </Box>
              <Box sx={{display:'flex',justifyContent:'space-between',width:'100%',border:'0.3px solid gray',borderRadius:'12px',marginTop:'0.3em'}}>
                  <FormControlLabel value="fr" control={<Radio />} label={t('headerdilfra')} sx={{marginLeft:'0.4em',color:'#6d51c3'}} />
                  <Avatar variant='square' src={fr} sx={{padding:0.2,width:'60px',height:'30px',margin:0.3}} />
              </Box>
              <Box sx={{display:'flex',justifyContent:'space-between',width:'100%',border:'0.3px solid gray',borderRadius:'12px',marginTop:'0.3em'}}>
                  <FormControlLabel value="ae" control={<Radio />} label={t('headerdilara')} sx={{marginLeft:'0.4em',color:'#6d51c3'}} />
                  <Avatar variant='square' src={ae} sx={{padding:0.2,width:'60px',height:'30px',margin:0.3}} />
              </Box>
              <Box sx={{marginTop:'1em'}}> 
                <Button sx={{width:'100%',backgroundColor:'#5d3dbd',color:'white',"&:hover":{backgroundColor:'red',color:'black'}}} type='submit'>{t('guncelle')}</Button>
              </Box>
            </Stack>
            </RadioGroup>
        </FormControl>
        </form>
          </Box>
        </Modal>
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