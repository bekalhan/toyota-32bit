import React from 'react';
import {
    Box , Menu ,MenuItem
} from '@mui/material';

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

    const compareToMargin = (lg,md,sm,xs,xss) => {
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

    const setHeight = (size) =>{
        if(size=="lg"){
          let size = compareToSize(75,55,45,40,35);
          return size;
        }else if(size=="md"){
          let size = compareToSize(75,50,40,25,20);
          return size;
        }else if(size=="sm"){
          let size = compareToSize(60,40,30,20,20);
          return size;
        }else if(size =="xs"){
            let size = compareToSize(55,40,30,25,25);
            return size;
        }
    }

    const setMargin = (size) =>{
        if(size=="lg"){
            let size = compareToMargin(5,15,47,55,90);
            return size;
          }else if(size=="md"){
            let size = compareToMargin(35,35,60,20,50);
            return size;
          }else if(size=="sm"){
            let size = compareToMargin(50,95,130,20,90);
            return size;
          }else if(size=="xs"){
            let size = compareToMargin(35,100,130,90,120);
            return size;
          }
    }


  return (
    <Box>
        {defectSc ? (
            <Box>
            <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{zIndex:3,position:'absolute',
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
        ):null}
    </Box>
  )
}

export default MenuItems