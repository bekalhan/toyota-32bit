import TerminalList from "./pages/terminal/TerminalList";
import Login from "./pages/entrance/Login";
import ErrorLogin from "./pages/errorLogin/ErrorLogin";
import NotFound from "./utils/notfound/NotFound";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Test from "./pages/errorLogin/display/content/Test";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="cvqsterminal">
            <Route path="terminals" element={<TerminalList/>} />
            <Route path="terminal/:depcode/:filtercode" element={<Login />} />
            <Route path="terminal/defectentry" element={<ErrorLogin />} />
            <Route path="terminal/defectentry2" element={<Test />} />
          </Route>
          <Route path="*" element={<NotFound />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
