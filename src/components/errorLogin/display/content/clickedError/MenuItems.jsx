import React from 'react';
import {
    Box,Stack
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './index.css';


function MenuItems({defectSc,anchorEl,defects,error}) {
    const open = Boolean(anchorEl);

    const scrollTopToBottom = () =>{
      console.log("burada");
      const element = document.getElementById("scrollDiv");
      element.scrollTop += 30;
    }

    const scrollBottomToTop = () =>{
      const element = document.getElementById("scrollDiv");
      element.scrollTop -= 30;
    }
    
  return (
        <Box sx={{position:'absolute',zIndex:3}}>
        {defectSc && open ? (
          <Stack sx={{position:'absolute',zIndex:4}}>
            <Box sx={{
              marginLeft:`${error?.boxX+20}px`,
              marginTop:`${error?.boxY+error?.boxHeight+10}px`
            }}>
                <div className='scrollDiv' id='scrollDiv'>
                    <div className='content'>
                        {defects?.map((el,key)=>(
                         <div className='element' key={key}>
                            {el?.defectName}
                        </div>
                        ))}
                    </div>
                </div>
            </Box>
            <Box 
              sx={{
                marginLeft:`${error?.boxX+300}px`,
                position:'relative',
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
        ):null}
        </Box>
  )
}

export default MenuItems