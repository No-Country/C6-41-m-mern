import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componentes/Home/Home';
import NavBar from './componentes/NavBar/NavBar';
import Principal from './componentes/Principal/Principal';
import Combos from './componentes/Principal/Combos/Combos';
import Adicionales from './componentes/Principal/Adicionales/Adicionales';
import Promociones from './componentes/Principal/Promociones/Promociones';
import Finalizar from './componentes/Principal/Finalizar/Finalizar';
import Card from './componentes/Principal/Card/Card'
import { ContextProvider } from "./context/Context";
import ButtonCard from './componentes/Principal/ButtonCard/ButtonCard';
import CardFinish from './componentes/Principal/CardFinish/CardFinish';






function App() {

  
  
  return (
    <ContextProvider>
    <div className="App">
          <BrowserRouter>
          
          <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Principal" element={<Principal />}></Route>
          <Route path="/Combos" element={<Combos></Combos>}></Route>
          <Route path="/Adicionales" element={<Adicionales></Adicionales>}></Route>
          <Route path="/Promociones" element={<Promociones></Promociones>}></Route>
          <Route path="/Finalizar" element={<Finalizar></Finalizar>}></Route>
          <Route path="/Card" element={<Card></Card>}></Route>
          <Route path="/ButtonCard" element={<ButtonCard></ButtonCard>}></Route>
          <Route path="/CardFinish" element={<CardFinish></CardFinish>}></Route>
          
        </Routes>
    

      </BrowserRouter>
    </div>
    </ContextProvider>
  );
}

export default App;

  

