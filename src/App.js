import TerminalList from "./pages/terminal/TerminalList";
import Login from "./pages/entrance/Login";
import ErrorLogin from "./pages/errorLogin/ErrorLogin";
import NotFound from "./utils/notfound/NotFound";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {
  Box
} from '@mui/material';

//toast
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
    <Box sx={{backgroundColor:'#c6ffc7',height:'2000px'}}>
    <BrowserRouter>
        <Routes>
          <Route path="cvqsterminal">
            <Route path="terminals" element={<TerminalList/>} />
            <Route path="terminal/:depcode/:filtercode" element={<Login />} />
            <Route path="terminal/defectentry" element={<ErrorLogin />} />
          </Route>
          <Route path="*" element={<NotFound />} />
       </Routes>
    </BrowserRouter>
    </Box>
    <ToastContainer />
    </>
  );
}

export default App;
