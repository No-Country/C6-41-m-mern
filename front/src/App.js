import './App.css';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/Login';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from './componentes/Formulario/Formulario';
import NavBar from './componentes/NavBar/NavBar';
import Principal from './componentes/Principal/Principal';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <NavBar></NavBar>
           <Routes>
          
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Formulario" element={<Formulario />}></Route>
          <Route path="/Principal" element={<Principal />}></Route>
          
        </Routes>
        

      </BrowserRouter>
    </div>
  );
}

export default App;
