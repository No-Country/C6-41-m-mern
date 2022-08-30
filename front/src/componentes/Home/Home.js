import React from 'react'
import "./Home.css"
import logo from '../Imagenes/logo.png';
import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <div>
        
        <img src= {logo} alt='logo' className='Container' />
        

          <Link to="../principal">
          <button type="submit" name="btnIniciar" id="btnIniciar" className='btn'>Iniciar Compra</button>
          </Link> 
          
    </div>
  )
}

export default Home;