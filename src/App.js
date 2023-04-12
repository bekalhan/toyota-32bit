import TerminalList from "./pages/terminal/TerminalList";
import Login from "./pages/entrance/Login";
import ErrorLogin from "./pages/errorLogin/ErrorLogin";
import NotFound from "./utils/notfound/NotFound";
import ErrorList from "./pages/errorList/ErrorList";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {
  Box
} from '@mui/material';
import { HashRouter } from "react-router-dom";
import IdleTimerComponent from "./pages/errorLogin/display/time/IdleTimerComponent";

//toast
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <Box sx={{backgroundColor:'#c6ffc7',height:`${window.innerHeight}px`}}>
    <HashRouter>
        <Routes>
          <Route path="cvqsterminal">
            <Route path="terminals" element={<TerminalList/>} />
            <Route path="terminal/:depcode/:filtercode" element={<Login />} />
            <Route path="terminal/defectentry/:depcode/:filtercode/:number" element={<ErrorLogin />} />
            <Route path="terminal/defectentry/list" element={<ErrorList />} />
            <Route path="terminal/defectentry/time" element={<IdleTimerComponent />} />
          </Route>
          <Route path="*" element={<NotFound />} />
       </Routes>
    </HashRouter>
    </Box>
    <ToastContainer />
    </>
  );
}

export default App;
