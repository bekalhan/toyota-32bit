import React from 'react';
import  {
    Grid,Stack,FormGroup,FormControlLabel,Checkbox,Button,Typography,TextField
} from '@mui/material';

function Search() {
  return (
    <>
    <Grid item lg={12} md={12} sx={{display:'flex',justifyContent:'center'}}>
        <Typography sx={{fontWeight:'bold',marginTop:'0.3em'}} variant='h6'>MONTAJ NO</Typography>
         </Grid>
         <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1}}>
         <TextField
         sx={{width:'100%',backgroundColor:'white'}}
        />
       </Grid>
       <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
           <Button  sx={{width:'100%',border:'1px solid black',padding:2.5,color:'black',fontWeight:'bold'}}>ARA</Button>
       </Grid>
    </>
  )
}

export default Search