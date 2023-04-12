import * as React from 'react';
import {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Box, Typography, Grid,Stack} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TableComp({list}) {

    const titles= [{name:"Bildiren",size:100},{name:"Body",size:40},{name:"Assy",size:30},{name:"Vin No",size:153},{name:"Renk",size:40},{name:"Mdl",size:60},{name:"Sicil",size:120},
    {name:"Parca",size:220},{name:"Spot",size:30},{name:"Gun",size:30},{name:"Arc",size:30},{name:"ArcGun",size:60},{name:"Hata",size:200},{name:"Rank",size:70},
    {name:"Saat",size:120},{name:"Hata Türü",size:90},{name:"Hata Sor",size:120},{name:"Alt Sorumlu",size:100},{name:"NR REASON",size:150}]

    const getColor = (code) => {
      if(code === "#d7dfe3" || code === "#fffefe" || code === "#f6f6f6" || code === "#ffffff"){
        return "black";
      }else{
        return "white";
      }
    }

  return (
    <Paper sx={{ width: '100%',height:'100%', overflow: 'hidden' }}>
      <TableContainer sx={{ height:'100%' }}>
        <Table stickyHeader aria-label="sticky table" sx={{position:'relative'}}>
          <TableHead>
          <TableRow>
            {titles?.map((el)=>(
                <TableCell style={{minWidth:`${el?.size}px`}}  sx={{backgroundColor:'#c6ffc7',borderRight:'1px solid black',fontWeight:'bold'}} align="center" variant='head'>{el?.name}</TableCell>
            ))}
            <Grid container sx={{width:'250px',height:'60px',backgroundColor:'#c6ffc7'}}>
                <Grid item lg={4} md={4} sm={4} xs={4} sx={{borderRight:'1px solid black'}}>
                  <Typography sx={{display:'flex',justifyContent:'center',fontWeight:'bold',marginTop:'1em'}}>Kaydet</Typography>
                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={8}>
                  <Typography sx={{display:'flex',justifyContent:'center',fontWeight:'bold',marginTop:'1em'}}>İşlem</Typography>
                </Grid>
            </Grid>
          </TableRow>
          </TableHead>
          <TableBody id="asd">
          {list?.defectList?.map((el)=>(
        <TableRow sx={{backgroundColor:'#c6ffc7',height:'30px'}}  hover>
            <TableCell style={{minWidth:'100px',border:'0.5px solid black'}} align='center'>{el?.depCode}</TableCell>
            <TableCell style={{minWidth:'40px',border:'0.5px solid black'}} align='center'>{el?.bodyNo}</TableCell>
            <TableCell style={{minWidth:'33px',border:'0.5px solid black'}} align='center'></TableCell>
            <TableCell style={{minWidth:'140px',border:'0.5px solid black'}} align='center'>{el?.vinNo}</TableCell>
            <TableCell style={{minWidth:'40px',border:'0.5px solid black'}}  align='center'>        
              <Box sx={{backgroundColor:`${el?.rgbCode}`,width:'80px',borderRadius:'12px'}}>
                <Typography sx={{fontWeight:'bold',color:`${getColor(el?.rgbCode)}`}}>{el?.colorExtCode}</Typography>
              </Box>
            </TableCell>
            <TableCell style={{minWidth:'60px',border:'0.5px solid black'}} align='left'>{el?.modelCode}</TableCell>
            <TableCell style={{minWidth:'120px',border:'0.5px solid black'}} align='left'>{el?.localId}</TableCell>
            <TableCell style={{minWidth:'220px',border:'0.5px solid black',color:'red',textDecoration:'underline'}} align='left'>{el?.partName}</TableCell>
            <TableCell style={{minWidth:'30px',border:'0.5px solid black'}} align='left'></TableCell>
            <TableCell style={{minWidth:'30px',border:'0.5px solid black'}} align='left'></TableCell>
            <TableCell style={{minWidth:'30px',border:'0.5px solid black'}} align='left'></TableCell>
            <TableCell style={{minWidth:'60px',border:'0.5px solid black'}} align='left'></TableCell>
            <TableCell style={{minWidth:'200px',border:'0.5px solid black'}} align='left'>{el?.defectName.substring(0,23)}</TableCell>
            <TableCell style={{minWidth:'75px',border:'0.5px solid black'}} align='left'>{el?.defrankCode}</TableCell>
            <TableCell style={{minWidth:'120px',border:'0.5px solid black'}} align='left'>{el?.formattedDefectHour}</TableCell>
            <TableCell style={{minWidth:'90px',border:'0.5px solid black'}} align='left'>{el?.defectType}</TableCell>
            <TableCell style={{minWidth:'120px',border:'0.5px solid black'}} align='left'>{el?.defrespName}</TableCell>
            <TableCell style={{minWidth:'100px',border:'0.5px solid black'}} align='left'></TableCell>
            <TableCell style={{minWidth:'150px',border:'0.5px solid black'}} align='left'>Coming Soon!</TableCell>
            <Grid container sx={{width:'250px',height:'60px',backgroundColor:'#c6ffc7'}}>
                <Grid item lg={4} md={4} sm={4} xs={4} sx={{border:'0.5px solid black'}}>
                    <Box sx={{width:'80%',height:'80%',backgroundColor:'black',borderRadius:'15px',display:'flex',justifyContent:'center',marginLeft:'0.5em',marginTop:'0.5em'}}>
                      <SaveIcon sx={{color:'white',marginTop:'0.5em'}} />
                    </Box>
                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={8} sx={{border:'0.5px solid black'}}>
                  <Stack direction="row">
                    <Box sx={{width:'50%'}}>
                        <Box sx={{width:'80%',height:'100%',backgroundColor:'red',borderRadius:'15px',display:'flex',justifyContent:'center',marginLeft:'0.5em',marginTop:'0.6em'}}>
                          <EditIcon sx={{color:'white',marginTop:'0.5em'}} />
                        </Box>
                    </Box>
                    <Box sx={{width:'50%'}}>
                        <Box sx={{width:'80%',height:'100%',backgroundColor:'red',borderRadius:'15px',display:'flex',justifyContent:'center',marginLeft:'0.5em',marginTop:'0.6em'}}>
                          <DeleteIcon sx={{color:'white',marginTop:'0.5em'}} />
                        </Box>
                    </Box>
                  </Stack>
                </Grid>
            </Grid>
        </TableRow>
        ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}