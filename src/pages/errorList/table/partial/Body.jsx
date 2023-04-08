import React,{useState} from 'react';
import {TableBody,TableRow,TableCell,Typography,Grid,Box} from '@mui/material';
import {useRedux} from '../../../../hooks/useRedux'
import {getErrorDataList} from '../../../../redux/slices/errorList';

function Body() {

  let list = useRedux({name:"errorList",data:"errorList",slice:getErrorDataList()});  

  console.log("list : ",list?.defectList);

  return (
    <TableBody>
          {list?.defectList?.map((el)=>(
            <TableRow>
            <Grid container sx={{width:'2270px',backgroundColor:'#c6ffc7'}}>
            <Grid item sx={{border:'0.5px solid black',width:'120px'}}>
                <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.6em',marginBottom:'0.6em'}}>{el?.depCode}</Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'60px'}}>
                <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.6em',marginBottom:'0.6em'}}>{el?.bodyNo}</Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'40px'}}>
                <Typography sx={{display:'flex',justifyContent:'center'}}></Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'200px'}}>
                <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.6em',marginBottom:'0.6em'}}>{el?.vinNo}</Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'60px'}}>
                <Box sx={{width:'100%',height:'80%',borderRadius:'15px',backgroundColor:`${el?.rgbCode}`,marginTop:'0.3em'}}>
                    <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.3em'}}>{el?.colorExtCode}</Typography>
                </Box>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'100px'}}>
                <Typography sx={{marginTop:'0.6em',marginBottom:'0.6em',marginLeft:'0.2em'}}>{el?.modelCode}</Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'120px'}}>
                <Typography sx={{marginTop:'0.6em',marginBottom:'0.6em',marginLeft:'0.2em'}}>{el?.localId}</Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'220px'}}>
                <Typography sx={{color:'red',textDecoration:'underline'}}>{el?.partName}</Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'60px'}}>
                <Typography sx={{}}></Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'60px'}}>
                <Typography sx={{}}></Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'60px'}}>
                <Typography sx={{}}></Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'80px'}}>
                <Typography sx={{}}></Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'200px'}}>
                <Typography sx={{marginTop:'0.6em',marginBottom:'0.6em',marginLeft:'0.2em'}}>{el?.defectName}</Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'70px'}}>
                <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.6em',marginBottom:'0.6em'}}>{el?.defrankCode}</Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'120px'}}>
                <Typography sx={{marginTop:'0.6em',marginBottom:'0.6em',marginLeft:'0.2em'}}>{el?.formattedDefectHour}</Typography>
            </Grid>
            <Grid item  sx={{border:'0.5px solid black',width:'90px'}}>
                <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.6em',marginBottom:'0.6em'}}>{el?.defectType}</Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'120px'}}>
                <Typography sx={{marginTop:'0.6em',marginBottom:'0.6em',marginLeft:'0.2em'}}>{el?.defrespName}</Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'100px'}}>
                <Typography sx={{}}></Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'150px'}}>
                
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'80px'}}>
                <Typography sx={{display:'flex',justifyContent:'center',fontWeight:'bold'}}></Typography>
            </Grid>
            <Grid item sx={{border:'0.5px solid black',width:'160px'}}>
                <Typography sx={{display:'flex',justifyContent:'center',fontWeight:'bold'}}>İşlem</Typography>
            </Grid>
            </Grid>
        </TableRow>
          ))}
        {list?.defectList?.map((el)=>{
            <TableRow>
                <Grid container sx={{width:'2270px',backgroundColor:'#c6ffc7'}}>
                <Grid item sx={{border:'0.5px solid black',width:'120px'}}>
                    <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.6em',marginBottom:'0.6em'}}>AI</Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'60px'}}>
                    <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.6em',marginBottom:'0.6em'}}>25800</Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'40px'}}>
                    <Typography sx={{display:'flex',justifyContent:'center'}}></Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'200px'}}>
                    <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.6em',marginBottom:'0.6em'}}>NMTBA3BE20R065983E</Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'60px'}}>
                    <Box sx={{width:'100%',height:'80%',borderRadius:'15px',backgroundColor:'white',marginTop:'0.3em'}}>
                        <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.3em'}}>1L0</Typography>
                    </Box>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'100px'}}>
                    <Typography sx={{marginTop:'0.6em',marginBottom:'0.6em',marginLeft:'0.2em'}}>COR</Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'120px'}}>
                    <Typography sx={{marginTop:'0.6em',marginBottom:'0.6em',marginLeft:'0.2em'}}>99469</Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'220px'}}>
                    <Typography sx={{color:'red',textDecoration:'underline'}}>Body no: 25800, E/G terminalinde kontrol edilmedi</Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'60px'}}>
                    <Typography sx={{}}></Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'60px'}}>
                    <Typography sx={{}}></Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'60px'}}>
                    <Typography sx={{}}></Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'80px'}}>
                    <Typography sx={{}}></Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'200px'}}>
                    <Typography sx={{marginTop:'0.6em',marginBottom:'0.6em',marginLeft:'0.2em'}}>Yerleştirme Hatası</Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'70px'}}>
                    <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.6em',marginBottom:'0.6em'}}>10</Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'120px'}}>
                    <Typography sx={{marginTop:'0.6em',marginBottom:'0.6em',marginLeft:'0.2em'}}>15:59:19</Typography>
                </Grid>
                <Grid item  sx={{border:'0.5px solid black',width:'90px'}}>
                    <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.6em',marginBottom:'0.6em'}}>(H)(RDD)</Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'120px'}}>
                    <Typography sx={{marginTop:'0.6em',marginBottom:'0.6em',marginLeft:'0.2em'}}>Body Fitting</Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'100px'}}>
                    <Typography sx={{}}></Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'150px'}}>
                    <Typography sx={{display:'flex',justifyContent:'center',fontWeight:'bold'}}>NR REASON</Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'80px'}}>
                    <Typography sx={{display:'flex',justifyContent:'center',fontWeight:'bold'}}></Typography>
                </Grid>
                <Grid item sx={{border:'0.5px solid black',width:'160px'}}>
                    <Typography sx={{display:'flex',justifyContent:'center',fontWeight:'bold'}}>İşlem</Typography>
                </Grid>
                </Grid>
            </TableRow>
        })}
    </TableBody>
  )
}

export default Body