import React from 'react'
import "./Home.css"
import logo from '../Imagenes/logo.png';


export const Home = () => {
  return (
    <div className='Container'>
        
        <img src= {logo} alt='logo'  />
        
        
          <button type="submit" name="btnIniciar" id="btnIniciar" href="/Principal" className='btn'>Iniciar Compra</button>
          
          
    </div>
  )
}

export default Home;