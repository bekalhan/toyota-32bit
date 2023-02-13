import React,{useState} from 'react';
import { Drawer , Box, Typography, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

function DrawerMenu() {
  const [isDrawerOpen,setIsDrawerOpen] = useState(false);
  
    return (
      <Box sx={{display:{lg:'none',md:'none',sm:'none',xs:'block'}}}>
      <IconButton size='large' edge='start' aria-label='logo' onClick={()=> setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor='top' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)} sx={{marginTop:'100px'}}>
        <Box width='100%' height='200px' textAlign='center' role='presentation'>
          <MenuList>
            <MenuItem>
              <ListItemText>YARDIM</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>ANA SAYFA</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>DESTEK</ListItemText>
            </MenuItem>
          </MenuList>
        </Box>
      </Drawer>
      </Box>

  )
}

export default DrawerMenu