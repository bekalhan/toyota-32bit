import TerminalList from "./pages/terminal/TerminalList";
import Login from "./pages/entrance/Login";
import ErrorLogin from "./pages/defEntry/DefectEntry";
import NotFound from "./utils/notfound/NotFound";
import ErrorList from "./pages/defectList/defectList";
import PrivateRoute from "./pages/routes/PrivateRoute";
import {Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import { HashRouter } from "react-router-dom";
//toast
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import React from 'react';

//mui theme
import {ThemeProvider} from '@mui/material';
import theme from './theme/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box>
    <HashRouter>
        <Routes>
          <Route path="cvqsterminal">
            <Route path="terminals" element={<TerminalList/>} />
            <Route path="terminals/route" element={<PrivateRoute/>} />
            <Route path="terminal/:depcode/:filtercode" element={<Login />} />
            <Route path="terminal/:depcode/:filtercode/:slash" element={<Login />} />
            <Route path="terminal" element={<PrivateRoute />}>
              <Route path="defectentry/:depcode/:filtercode/:number" element={<ErrorLogin />} />
              <Route path="defcorrect/:depcode/:filtercode" element={<ErrorList />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
       </Routes>
    </HashRouter>
    </Box>
    <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
