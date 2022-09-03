import React from 'react'
import "./Home.css"

import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <div className='Container'>
        
        <img src= '../Imagenes/logo.png' alt='logo' className='imagen' />
        

          <Link to="../principal">
          <button type="submit" name="btnIniciar" id="btnIniciar" className='btn'>Iniciar Compra</button>
          </Link> 
          
    </div>
  )
}

export default Home;