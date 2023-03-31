import React from 'react';
import {
    Box , Stack, Typography , Checkbox ,FormControlLabel , Button
} from '@mui/material';
import Search from '../../../../components/search/Search';
import ModalComponent from '../modal/ModalComponent';
import {useRedux} from '../../../../hooks/useRedux';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Buttons() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
    setOpen(true);
    }
    const handleClose = () => setOpen(false);

    let choosedError = useRedux({name:"error",data:"choosedError"});

  return (
    <Stack direction="column">
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
            <Button disabled sx={{border:'1px solid gray',padding:2}}><Typography sx={{fontWeight:'bold'}}>HIZLI KAYDET</Typography></Button>
            <Button disabled sx={{border:'1px solid gray',padding:2,marginTop:'0.3em'}}><Typography sx={{fontWeight:'bold'}}>KAYDET VE GEÇ</Typography></Button>
            {choosedError === undefined ?(
             <Button sx={{border:'1px solid gray',padding:2,marginTop:'0.3em'}} disabled><Typography sx={{fontWeight:'bold'}}>HATA KAYIT</Typography></Button>
            ):(
                <Button
                 sx={{border:'1px solid gray',padding:2,marginTop:'0.3em'}}
                 onClick={()=>{handleOpen()}}
                 ><Typography sx={{fontWeight:'bold',color:'black'}}>HATA KAYIT</Typography></Button>
            )}
        </Stack>
        <Search />
        <Stack direction="column" sx={{marginLeft:'1em',marginRight:'1em'}}>
            <Button  sx={{border:'1px solid gray',padding:2,marginTop:'0.3em',color:'black'}}><Typography sx={{fontWeight:'bold'}}>HIZLI KAYDET</Typography></Button>
            <Button  sx={{border:'1px solid gray',padding:2,marginTop:'0.3em',color:'black'}}><Typography sx={{fontWeight:'bold'}}>KAYDET VE GEÇ</Typography></Button>
            <Button  sx={{border:'1px solid gray',padding:2,marginTop:'0.3em',color:'black'}}><Typography sx={{fontWeight:'bold'}}>HATA KAYIT</Typography></Button>
        </Stack>
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