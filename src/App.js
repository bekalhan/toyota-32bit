import TerminalList from "./components/terminal/TerminalList";
import Login from "./components/entrance/Login";
import {BrowserRouter,Routes,Route,Link,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="cvqsterminal">
            <Route path="terminals" element={<TerminalList/>} />
            <Route path="terminal/:depcode/:filtercode" element={<Login />} />
          </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
