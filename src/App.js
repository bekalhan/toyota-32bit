import TerminalList from "./components/terminal/TerminalList";
import Login from "./components/entrance/Login";
import ErrorLogin from "./components/errorLogin/ErrorLogin";
import NotFound from "./utils/notfound/NotFound";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
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
  );
}

export default App;
