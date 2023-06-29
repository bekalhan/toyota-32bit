import { Box, Button, Typography , Stack } from '@mui/material';
import React from 'react';
import BottomBar from './bottom/BottomBar';
import {useRedux} from '../../hooks/useRedux';
import {getDefectDataList} from '../../redux/slices/defectList';
import TableMain from './table/TableMain';
import {useTime} from '../../hooks/useTime';
import {useParams,useNavigate} from 'react-router-dom';

function DefectList() {

  let list = useRedux({name:"defectList",data:"defectList",slice:getDefectDataList()});  
  let inactivity = useTime(30);
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Stack direction="column" sx={{height:'100%',display:'flex'}}>
      {!inactivity?(
        <Box sx={{justifyContent:'flex-end',display:'flex'}}>
          <Button sx={{border:'2px solid gray',color:'black',width:'100px',fontWeight:'bold',height:'50px'}} onClick={()=>navigate(`/cvqsterminal/terminal/defectentry/${params.depcode}/${params.filtercode}/3070725`)}>GERİ</Button>
        </Box>
      ):null}
      <Box sx={{height:'650px'}}>
          <TableMain />
      </Box>
      <Box sx={{height:'3%',backgroundColor:'#c6ffc7',border:'1px solid black',display:'flex',justifyContent:'flex-end'}}>
          <Typography sx={{fontSize:'15px',marginRight:'1em'}}>Total rows : {list?.defectList?.length}</Typography>
      </Box>
      <Box sx={{backgroundColor:'white',height:'20%',overflow:'auto'}}>
          <BottomBar />
      </Box>
    </Stack>
  )
}

export default DefectList;