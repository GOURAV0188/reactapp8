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
    
    <BrowserRouter   basename='/reactapp8'>
    
    <Routes>

<Route exact  path="/reactapp8"  element={<Home />} />

    <Route  path="/login"  element={<Login />} />
<Route path="/register" element= {<Register/>} />



    </Routes>
    
    
    </BrowserRouter>
    
    
    
    </>

    </div>
  );
}

export default App;
