import React from 'react';
import  {
    Grid,Stack,FormGroup,FormControlLabel,Checkbox,Button,Typography,TextField
} from '@mui/material';
import Search from './search/Search';

function Buttons() {
  return (
   <Grid item lg={2.5} md={2.7} sm={12} xs={12}>
     <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'center'}}>
            <Stack direction='row'>
                 <FormGroup aria-label="position" row>
                 <FormControlLabel
                  value="end"
                  control={<Checkbox/>}
                  label="Harigami"
                  labelPlacement="end"
                />
            </FormGroup>
                 <FormGroup aria-label="position" row>
                     <FormControlLabel
                     value="end"
                     control={<Checkbox />}
                     label="RDD"
                     labelPlacement="end"
                 />
            </FormGroup>
        </Stack>
    </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{paddingLeft:1,paddingRight:1}}>
            <Button disabled sx={{width:'100%',border:'1px solid black',padding:2.3}}>HIZLI KAYDET</Button>
        </Grid>
        <Grid item lg={12} md={12} sm={12}  xs={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
            <Button disabled sx={{width:'100%',border:'1px solid black',padding:2.3}}>KAYDET VE GEÇ</Button>
        </Grid> 
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
            <Button disabled sx={{width:'100%',border:'1px solid black',padding:2.3}}>HATA KAYIT</Button>
        </Grid>
    </Grid>
      <Search />
       <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
           <Button  sx={{width:'100%',border:'1px solid black',padding:2.5,color:'black',fontWeight:'bold'}}>TERMİNAL İLK RESMİ</Button>
       </Grid> 
       <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
           <Button  sx={{width:'100%',border:'1px solid black',padding:2.5,color:'black',fontWeight:'bold'}}>SIK GELEN HATA</Button>
       </Grid>
       <Grid item lg={12} md={12} sx={{paddingLeft:1,paddingRight:1,paddingTop:'0.2em'}}>
           <Button  sx={{width:'100%',border:'1px solid black',padding:2.5,color:'black',fontWeight:'bold'}}>MANİFEST</Button>
       </Grid>
   </Grid>
  )
}

export default Buttons