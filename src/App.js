import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Home } from "./Pages/Home";
import { Register } from "./Components/Register";
function App() {
  return (
    <div className="App">
     <>
    
    <BrowserRouter>
    
    <Routes>
    <Route  path="/login"  element={<Login />} />
<Route path="/register" element= {<Register/>} />

<Route  path="/"  element={<Home />} />


    </Routes>
    
    
    </BrowserRouter>
    
    
    
    </>

    </div>
  );
}

export default App;
