import React from 'react';
import {
    Stack,TextField,Button,Typography
} from '@mui/material';

function Search() {
  return (
    <Stack direction="column" sx={{marginLeft:'1em',marginRight:'1em'}}>
        <Typography sx={{fontWeight:'bold',marginTop:'0.3em',display:'flex',justifyContent:'center'}} variant='h6'>MONTAJ NO</Typography>
        <TextField
          sx={{width:'100%',backgroundColor:'white'}}
         />
        <Button  sx={{width:'100%',padding:2.2,color:'black',fontWeight:'bold',border:'1px solid gray',marginTop:'0.3em'}}>ARA</Button>
    </Stack>
  )
}

export default Search