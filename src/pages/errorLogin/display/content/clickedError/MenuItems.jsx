import React from 'react';
import {
    Box,Stack
} from '@mui/material';
import { useDispatch , useSelector} from "react-redux";
import {
  changeError
} from '../../../../../redux/slices/errorSlices';
import '../../../../../index.css';
import ScrollButton from '../../../../../components/scrollButton/ScrollButton';

function MenuItems({anchorEl,defects,error,scroll}) {
   const open = Boolean(anchorEl);

  //redux
  const store = useSelector(store=>store?.error);
  const {choosedError} = store;
  const dispatch = useDispatch();

  const handleClickError = (errorName) => {
    dispatch(changeError(errorName));
  }
    
  return (
        <Box>
        {open && choosedError===undefined ? (
          <Stack>
            <Box sx={{
              marginLeft:`${error?.boxX+20-scroll.left}px`,
              marginTop:`-${600-(error?.boxY+error?.boxHeight+10-scroll.top)}px`,
              position:'absolute',
              zIndex:3
            }}>
                <div className='scrollDiv' id='scrollDiv'>
                    <div className='content'>
                        {defects?.map((el,key)=>(
                         <div className='element'
                          key={key}
                          onClick={()=>handleClickError(el?.defectName)}
                          >
                            {el?.defectName}
                        </div>
                        ))}
                    </div>
                </div>
            </Box>
            <Box 
              sx={{
                marginLeft:`${error?.boxX+300-scroll.left}px`,
                marginTop:`-${600-(error?.boxY+90-scroll.top)}px`,
                position:'absolute',
                zIndex:4
              }}
              >
              <Box sx={{width:'110px',height:'80px'}}>
                <ScrollButton anc={"scrollDiv"} />
              </Box>
            </Box>
          </Stack>
        ):(
          null
        )}
        </Box>
  )
}
export default MenuItems;