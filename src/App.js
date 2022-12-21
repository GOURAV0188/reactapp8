import logo from './logo.svg';
import './App.css';
import {Routes,Route, HashRouter } from "react-router-dom";
import { Login } from "./Components/Login";
import { Home } from "./Pages/Home";
import { Register } from "./Components/Register";
import {ProtectedRoutes}   from "./Services/ProtectedRoutes"
function App() {
  return (
    <div className="App">
     <>
    
    <HashRouter   basename="reactappnew" >
    
    <Routes>
    <Route    exact path="/reactappnew"  element={<ProtectedRoutes />} />

<Route   exact  path="/reactappnew"  element={<Home />} />

    <Route  path="/login"  element={<Login />} />
<Route path="/register" element= {<Register/>} />



    </Routes>
    
    
    </HashRouter>
    
    
    
    </>

    </div>
  );
}

export default App;
