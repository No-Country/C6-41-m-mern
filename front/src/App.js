import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/Home/Home";
import NavBar from "./componentes/NavBar/NavBar";
import Principal from "./componentes/Principal/Principal";
import Finalizar from "./componentes/Principal/Finalizar/Finalizar";
import { ContextProvider } from "./context/Context";

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
            <Route path="/Finalizar" element={<Finalizar></Finalizar>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;
