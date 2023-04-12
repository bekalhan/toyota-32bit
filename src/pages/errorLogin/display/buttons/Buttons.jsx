import React from 'react';
import {
    Box , Stack, Typography , Checkbox ,FormControlLabel , Button , Avatar
} from '@mui/material';
import Search from '../../../../components/search/Search';
import ModalComponent from '../modal/ModalComponent';
import {useRedux} from '../../../../hooks/useRedux';
import car from '../../../../img/car12.jpeg';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Buttons({status}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
    setOpen(true);
    }
    const handleClose = () => setOpen(false);

    let choosedError = useRedux({name:"error",data:"choosedError"});
    let error = useRedux({name:"error",data:"clickError"});

  return (
    <Stack direction="column">
        {error === undefined ?(
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
            <Button  sx={{border:'1px solid gray',padding:2,marginTop:'0.3em',color:'black',backgroundColor:status ? null : '#ff1b00'}}><Typography sx={{fontWeight:'bold',}}>HIZLI KAYDET</Typography></Button>
            <Button  sx={{border:'1px solid gray',padding:2,marginTop:'0.3em',color:'black'}}><Typography sx={{fontWeight:'bold'}}>KAYDET VE GEÇ</Typography></Button>
            <Button  sx={{border:'1px solid gray',padding:2,marginTop:'0.3em',color:'black',backgroundColor:status ? null : '#ff1b00'}}><Typography sx={{fontWeight:'bold'}}>HATA KAYIT</Typography></Button>
        </Stack></>
        ):(
        <>
            <Box>
                 <Typography sx={{fontWeight:'bold',marginLeft:'0.5em',marginRight:'0.5em',display:{lg:'block',md:'block',sm:'flex',xs:'flex'},justifyContent:'center'}}>ÖNCEKİ</Typography>
                 <Box sx={{display:{lg:'block',md:'block',sm:'flex',xs:'flex'},justifyContent:'center'}}>
                     <Avatar src={car} variant='square' sx={{width:{lg:'92%',md:'92%',sm:'40%',xs:'40%'},height:'auto',marginLeft:'0.5em',marginRight:'0.5em'}} />
                 </Box>
            </Box>
            <Stack sx={{marginLeft:'0.5em',marginRight:'0.5em'}}>
            {choosedError === undefined ?(
             <Button sx={{border:'1px solid gray',padding:3,marginTop:'0.3em'}} disabled><Typography sx={{fontWeight:'bold'}}>HATA KAYIT</Typography></Button>
            ):(
                <Button
                 sx={{border:'1px solid gray',padding:3,marginTop:'0.3em'}}
                 onClick={()=>{handleOpen()}}
                 ><Typography sx={{fontWeight:'bold',color:'black'}}>HATA KAYIT</Typography></Button>
            )}
            <Button
                 sx={{border:'1px solid gray',padding:3,marginTop:'0.3em',backgroundColor:status ? null : '#ff1b00'}}
                 ><Typography sx={{fontWeight:'bold',color:'black'}}>SONRAKİ ARAÇ</Typography></Button>
            <Button
                 sx={{border:'1px solid gray',padding:3,marginTop:'0.3em'}}
                 ><Typography sx={{fontWeight:'bold',color:'black'}}>TERMİNAL İLK RESMİ</Typography></Button>
            <Button
                 sx={{border:'1px solid gray',padding:3,marginTop:'0.3em'}}
                 ><Typography sx={{fontWeight:'bold',color:'black'}}>SIK GELEN HATA</Typography></Button>
            <Button
                 sx={{border:'1px solid gray',padding:3,marginTop:'0.3em',backgroundColor:status ? null : '#ff1b00'}}
                 ><Typography sx={{fontWeight:'bold',color:'black'}}>SIRADAKİ ARACI ATLA</Typography></Button>
            </Stack>
        </>
        )}
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