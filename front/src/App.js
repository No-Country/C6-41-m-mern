import './App.css';
import Home from './componentes/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './componentes/NavBar/NavBar';
import Principal from './componentes/Principal/Principal';
import Combos from './componentes/Principal/Combos/Combos';
import Adicionales from './componentes/Principal/Adicionales/Adicionales';
import Promociones from './componentes/Principal/Promociones/Promociones';
import Finalizar from './componentes/Principal/Finalizar/Finalizar';




function App() {

  
  
  return (
    <div className="App">
          <BrowserRouter>
          <NavBar></NavBar>
           <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Principal" element={<Principal />}></Route>
          <Route path="/Combos" element={<Combos></Combos>}></Route>
          <Route path="/Adicionales" element={<Adicionales></Adicionales>}></Route>
          <Route path="/Promociones" element={<Promociones></Promociones>}></Route>
          <Route path="/Finalizar" element={<Finalizar></Finalizar>}></Route>
          
        </Routes>
        

      </BrowserRouter>
    </div>
  );
}

export default App;

  

