import './App.css';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/Login';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from './componentes/Formulario/Formulario';
import NavBar from './componentes/NavBar/NavBar';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <NavBar></NavBar>
           <Routes>
          
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Registro" element={<Formulario />}></Route>
          
        </Routes>
        

      </BrowserRouter>
    </div>
  );
}

export default App;
