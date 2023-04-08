import React from 'react';
import {TableHead,TableRow,Grid,Typography} from '@mui/material';

function Header() {
  const titles= [{name:"Bildiren",size:120},{name:"Body",size:60},{name:"Assy",size:40},{name:"Vin No",size:200},{name:"Renk",size:60},{name:"Mdl",size:100},{name:"Sicil",size:120},
  {name:"Parca",size:220},{name:"Spot",size:60},{name:"Gun",size:60},{name:"Arc",size:60},{name:"ArcGun",size:80},{name:"Hata",size:200},{name:"Rank",size:70},
  {name:"Saat",size:120},{name:"Hata Türü",size:90},{name:"Hata Sor",size:120},{name:"Alt Sorumlu",size:100},{name:"NR REASON",size:150},{name:"Kaydet",size:80},{name:"İşlem",size:160}]

  const printItem = (width,text) => {
    return (
        <Grid item sx={{width:`${width}px`,borderRight:'1px solid black',marginTop:'0.4em',marginBottom:'0.4em'}}>
            <Typography sx={{display:'flex',justifyContent:'center',fontWeight:'Bold'}}>{text}</Typography>
        </Grid>
    )
  }

  return (
    <TableHead sx={{position:'fixed'}}>
    <TableRow>
    <Grid container sx={{width:'2270px',backgroundColor:'#c6ffc7'}}>
        {titles?.map((el)=>(
            printItem(el.size,el.name)
        ))}
    </Grid>
    </TableRow>
  </TableHead>
  )
}

export default Header