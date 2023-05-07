import React from 'react';
import {useTranslation} from 'react-i18next';
import tr from '../../img/turk.png';
import en from '../../img/ingiltere.png';
import fr from '../../img/fransa.jpeg';
import ae from '../../img/arap.png';
import {
    Stack, Box, Typography , Modal, Avatar, Button , RadioGroup , FormControl, FormControlLabel ,Radio
  } from '@mui/material';


function ChangeLanguage({open,handleClose}) {
    const {t,i18n} = useTranslation();
    const [value, setValue] = React.useState(i18n.language);
  
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
  )
}

export default ChangeLanguage