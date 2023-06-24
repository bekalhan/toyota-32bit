import React, { useState } from 'react';
import {
    Box,Stack
} from '@mui/material';
import {changeError} from '../../../../../redux/slices/errorSlices';
import '../../../../../index.css';
import ScrollButton from '../../../../../components/scrollButton/ScrollButton';
import {useRedux} from '../../../../../hooks/useRedux';
import { useDispatch } from 'react-redux';

function MenuItems(params) {
  const open = Boolean(params.anchorEl);
  const dispatch = useDispatch();
  const handleClickError = (errorName) => {
    dispatch(changeError(errorName));
  }

  let choosedError = useRedux({name:"error",data:"choosedError"});
  let clean = useRedux({name:"error",data:"clean"});

  return (
        <Box>
        {open && choosedError === undefined && params.x!=="" && clean===false ? (
          <Stack>
            <Box sx={{
              marginLeft:`${params.error?.boxX+20-params.scroll.left}px`,
              marginTop:`-${600-(params.error?.boxY+params.error?.boxHeight+10-params.scroll.top-params.allScroll.y)}px`,
              position:'absolute',
              zIndex:3
            }}>
                <div className='scrollDiv' id='scrollDiv'>
                    <div className='content'>
                        {params?.defects?.map((el,key)=>(
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
                marginLeft:`${params.error?.boxX+300-params.scroll.left}px`,
                marginTop:`-${600-(params.error?.boxY+90-params.scroll.top-params.allScroll.y)}px`,
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