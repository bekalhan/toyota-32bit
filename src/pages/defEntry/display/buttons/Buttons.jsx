import React from 'react';
import {
    Box , Stack, Typography , Checkbox ,FormControlLabel , Button , Avatar
} from '@mui/material';
import Search from '../../../../components/search/Search';
import ModalComponent from '../modal/ModalComponent';
import {useRedux} from '../../../../hooks/useRedux';
import car from '../../../../img/car12.jpeg';
import {useTranslation} from 'react-i18next';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Buttons({status}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
    setOpen(true);
    }
    const handleClose = () => setOpen(false);

    let choosedDefect = useRedux({name:"defect",data:"choosedDefect"});
    let defectName = useRedux({name:"defect",data:"defectName"});
    let defect = useRedux({name:"defect",data:"clickDefect"});
    const {t,i18n} = useTranslation();


  return (
    <Stack direction="column">
        {defect === undefined?(
            <>
            <Box sx={{display:'flex'}}>
            <Stack direction="row" sx={{justifyContent:'center',width:'100%'}}>
            <FormControlLabel
                label="Harigami"
                control={<Checkbox {...label} sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }} />}
            />
            <FormControlLabel
                label="RDD"
                control={<Checkbox {...label} sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }} />}
            />
            </Stack>
        </Box>
        <Stack direction="column" sx={{marginLeft:'1em',marginRight:'1em'}}>
            <Button disabled sx={{border:'1px solid gray',padding:2}}><Typography sx={{fontWeight:'bold'}}>{t('hizlikaydet')}</Typography></Button>
            <Button disabled sx={{border:'1px solid gray',padding:2,marginTop:'0.3em'}}><Typography sx={{fontWeight:'bold'}}>{t('kaydetvegec')}</Typography></Button>
            {choosedDefect === undefined ?(
             <Button sx={{border:'1px solid gray',padding:2,marginTop:'0.3em'}} disabled><Typography sx={{fontWeight:'bold'}}>{t('hatakayit')}</Typography></Button>
            ):(
                <Button
                 sx={{border:'1px solid gray',padding:2,marginTop:'0.3em'}}
                 onClick={()=>{handleOpen()}}
                 ><Typography sx={{fontWeight:'bold',color:'black'}}>{t('montajno')}</Typography></Button>
            )}
        </Stack>
        <Search />
        <Stack direction="column" sx={{marginLeft:'1em',marginRight:'1em'}}>
            <Button  sx={{border:'1px solid gray',padding:2,marginTop:'0.3em',color:'black',backgroundColor:status ? null : '#ff1b00'}}><Typography sx={{fontWeight:'bold',}}>{t('terminalilkresmi')}</Typography></Button>
            <Button  sx={{border:'1px solid gray',padding:2,marginTop:'0.3em',color:'black'}}><Typography sx={{fontWeight:'bold'}}>{t('sikgelenhata')}</Typography></Button>
            <Button  sx={{border:'1px solid gray',padding:2,marginTop:'0.3em',color:'black',backgroundColor:status ? null : '#ff1b00'}}><Typography sx={{fontWeight:'bold'}}>{t('manifest')}</Typography></Button>
        </Stack></>
        ): defect !==undefined ? (
        <>
            <Box>
                 <Typography sx={{fontWeight:'bold',marginLeft:'0.5em',marginRight:'0.5em',display:{lg:'block',md:'block',sm:'flex',xs:'flex'},justifyContent:'center'}}>{t('onceki')}</Typography>
                 <Box sx={{display:{lg:'block',md:'block',sm:'flex',xs:'flex'},justifyContent:'center'}}>
                     <Avatar src={car} variant='square' sx={{width:{lg:'92%',md:'92%',sm:'40%',xs:'40%'},height:'auto',marginLeft:'0.5em',marginRight:'0.5em'}} />
                 </Box>
            </Box>
            <Stack sx={{marginLeft:'0.5em',marginRight:'0.5em'}}>
            {defectName === undefined ?(
             <Button sx={{border:'1px solid gray',padding:3,marginTop:'0.3em'}} disabled><Typography sx={{fontWeight:'bold'}}>{t('hatakayit')}</Typography></Button>
            ):(
                <Button
                 sx={{border:'1px solid gray',padding:3,marginTop:'0.3em'}}
                 onClick={()=>{handleOpen()}}
                 ><Typography sx={{fontWeight:'bold',color:'black'}}>{t('hatakayit')}</Typography></Button>
            )}
            <Button
                 sx={{border:'1px solid gray',padding:3,marginTop:'0.3em',backgroundColor:status ? null : '#ff1b00'}}
                 ><Typography sx={{fontWeight:'bold',color:'black'}}>{t('sonrakiarac')}</Typography></Button>
            <Button
                 sx={{border:'1px solid gray',padding:3,marginTop:'0.3em'}}
                 ><Typography sx={{fontWeight:'bold',color:'black'}}>{t('tumterminaller')}</Typography></Button>
            <Button
                 sx={{border:'1px solid gray',padding:3,marginTop:'0.3em'}}
                 ><Typography sx={{fontWeight:'bold',color:'black'}}>{t('terminalilkresmi')}</Typography></Button>
            <Button
                 sx={{border:'1px solid gray',padding:3,marginTop:'0.3em',backgroundColor:status ? null : '#ff1b00'}}
                 ><Typography sx={{fontWeight:'bold',color:'black'}}>{t('siradakiaraciatla')}</Typography></Button>
            </Stack>
        </>
        ):null}
        {open ? (
            <ModalComponent
            open={open}
            handleClose={handleClose}
            />
        ):null}
        
    </Stack>
  )
}
export default Buttons;