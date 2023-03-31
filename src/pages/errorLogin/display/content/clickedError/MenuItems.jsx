import React from 'react';
import {
    Box,Stack,Avatar
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch , useSelector} from "react-redux";
import {
  changeError
} from '../../../../../redux/slices/errorSlices';
import '../../../../../index.css';



function MenuItems({anchorEl,defects,error}) {
    const open = Boolean(anchorEl);

    const scrollTopToBottom = () =>{
      const element = document.getElementById("scrollDiv");
      element.scrollTop += 30;
    }

    const scrollBottomToTop = () =>{
      const element = document.getElementById("scrollDiv");
      element.scrollTop -= 30;
    }

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
              marginLeft:`${error?.boxX+20}px`,
              marginTop:`-${600-(error?.boxY+error?.boxHeight+10)}px`,
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
                marginLeft:`${error?.boxX+300}px`,
                marginTop:`-${600-(error?.boxY+90)}px`,
                position:'absolute',
                zIndex:4
              }}
              >
                <div className='direction'>
                    <div className='rdi-button'
                      onClick={()=>scrollBottomToTop()}
                    >
                        <KeyboardArrowUpIcon
                        sx={{marginTop:'0.3em'}}
                        />
                    </div>
                    <div className='rdi-button'
                    onClick={()=>scrollTopToBottom()}
                    >
                        <KeyboardArrowDownIcon
                        sx={{marginTop:'0.3em'}}
                        />
                    </div>
                </div>
            </Box>
          </Stack>
        ):(
          null
        )}
        </Box>
  )
}

export default MenuItems