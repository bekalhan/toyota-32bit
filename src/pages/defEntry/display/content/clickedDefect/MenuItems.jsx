import React, { useEffect, useState } from 'react';
import {
    Box,Stack
} from '@mui/material';
import {changeDefectName} from '../../../../../redux/slices/defectSlices';
import '../../../../../index.css';
import ScrollButton from '../../../../../components/scrollButton/ScrollButton';
import {useRedux} from '../../../../../hooks/useRedux';
import { useDispatch } from 'react-redux';

function MenuItems(params) {
  const open = Boolean(params.anchorEl);
  const dispatch = useDispatch();
  const handleClickDefect = (defectName) => {
    dispatch(changeDefectName(defectName));
  }

  let defectName = useRedux({name:"defect",data:"defectName"});
  let clean = useRedux({name:"defect",data:"clean"});


  return (
        <Box>
        {open && defectName === undefined  && clean === false ? (
          <Stack>
            <Box sx={{
              marginLeft:`${params.point?.x-params.scroll.left}px`,
              marginTop:`-${600-(params.point?.y+params.defect?.boxHeight+10-params.scroll.top-params.allScroll.y)}px`,
              position:'absolute',
              zIndex:3
            }}>
                <div className='scrollDiv' id='scrollDiv'>
                    <div className='content'>
                        {params?.defects?.map((el,key)=>(
                         <div className='element'
                          key={key}
                          onClick={()=>handleClickDefect(el?.defectName)}
                          >
                            {el?.defectName}
                        </div>
                        ))}
                    </div>
                </div>
            </Box>
            <Box 
              sx={{
                marginLeft:`${params.point?.x+280-params.scroll.left}px`,
                marginTop:`-${600-(params.point?.y+90-params.scroll.top-params.allScroll.y)}px`,
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