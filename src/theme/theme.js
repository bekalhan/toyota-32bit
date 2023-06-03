//mui theme
import {ThemeProvider} from '@mui/material';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      custom:{
        mainColor:'#c6ffc7',
        textColorRed:'#d23d42',
        borderColor:'#b7ecba',
        light:'#fff',
        grey:'#e8f0fd',
        dark:'#000',
        darkBorder:'#364737',
        red:'#d31823'
      }
    },
  });

  export default theme;