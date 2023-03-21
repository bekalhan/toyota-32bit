import React from 'react';
import {
    Box , Menu ,MenuItem , Stack , Button
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function MenuItems({defectSc,anchorEl,defects,space,handleClose}) {
    const open = Boolean(anchorEl);


    const compareToSize  = (lg,md,sm,xs,xss) =>{
        if(space.y < 100){
        return lg;
        }else if(space.y < 250 && space.y >100){
        return md;
        }else if(space.y < 370 && space.y > 250){
        return sm;
        }else if(space.y < 430 && space.y > 370){
        return xs;
        }else{
        return xss;
        }
    }

    const compareToMargin = (lg,md,sm,xs,xss,xsss) => {
        if(space.y < 100){
            return lg;
        }else if(space.y < 250 && space.y >100){
            return md;
        }else if(space.y < 370 && space.y > 250){
            return sm;
        }else if(space.y < 430 && space.y > 370){
            return xs;
        }else if(space.y < 500 && space.y > 430){
            return xss;
        }else{
            return xsss;
        }
    }

    const setHeight = (size) =>{
        if(size=="lg"){
          let size = compareToSize(75,55,40,40,35);
          return size;
        }else if(size=="md"){
          let size = compareToSize(75,50,40,25,30);
          return size;
        }else if(size=="sm"){
          let size = compareToSize(60,40,30,20,20);
          return size;
        }else if(size =="xs"){
            let size = compareToSize(50,40,40,40,40);
            return size;
        }
    }

    const setMargin = (size) =>{
        if(size=="lg"){
            let size = compareToMargin(5,15,10,57,90,115);
            return size;
          }else if(size=="md"){
            let size = compareToMargin(10,25,60,20,25,45);
            return size;
          }else if(size=="sm"){
            let size = compareToMargin(10,10,10,10,8,10);
            return size;
          }else if(size=="xs"){
            let size = compareToMargin(10,10,12,20,10,10);
            return size;
          }
    }

  return (
    <Box>

        <Box>
        {defectSc && open ? (
        <Stack direction="row" sx={{position:'fixed'}}>
                        <Box sx={{position:"fixed"}}>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={{position:'fixed',
                    width:'100%',
                    height:'%100',
                    marginTop:`7px`,
                    marginLeft:{lg:'300px',md:'300px',sm:'250px',xs:'220px'},
                }}
                    >   
                  <MenuItem
                  sx={{width:{lg:'140px',md:'140px',sm:'140px',xs:'80px'},height:'60px',padding:2,backgroundColor:'#c6ffc5',border:'0.5px solid black'
                  ,cursor:'pointer',justifyContent:'center'}}
                  >
                    <KeyboardArrowUpIcon />
                  </MenuItem>
                  <MenuItem
                  sx={{width:{lg:'140px',md:'140px',sm:'140px',xs:'80px'},height:'60px',padding:2,backgroundColor:'#c6ffc5',border:'0.5px solid black'
                  ,cursor:'pointer',justifyContent:'center'}}
                  >
                    <KeyboardArrowUpIcon />
                  </MenuItem>
                </Menu>
            </Box>
                <Box>
                    <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={{position:'fixed',
                    height:{lg:`${setHeight("lg")}%`,md:`${setHeight("md")}%`,sm:`${setHeight("sm")}%`,xs:`${setHeight("xs")}%`},
                    marginTop:{lg:`${setMargin("lg")}px`,md:`${setMargin("md")}px`,sm:`${setMargin("sm")}px`,xs:`${setMargin("xs")}px`}
                }}
                    >   
                    {defects?.map((el)=>(
                    <MenuItem onClose={handleClose} sx={{backgroundColor:'#c5ffc4',width:{lg:'300px',md:'300px',sm:'250px',xs:'220px'},
                    fontWeight:'bold',border:'1px solid black',padding:1.4}}>
                    {el?.defectName}
                    </MenuItem>
                    ))}
                    </Menu>
                </Box>
        </Stack>
        ):null}
        </Box>
    </Box>

  )
}

export default MenuItems