import React from 'react'
import "./Home.css"

export const Home = () => {
  return (
    <div>
        <div>
          
        </div>
        <div>
          <button type="submit" name="btnIniciar" id="btnIniciar" href="https://www.linkedin.com/" className='btn'>Iniciar Sesión</button>
          <button type="submit" name="btnEnviar" id="btnEnviar" className='btn'>Iniciar con Google</button>
          <button type="submit" name="btnEnviar" id="btnEnviar" className='btn'>Iniciar con Facebook</button>
        </div>
        <a href="/Formulario">Crea tu cuenta</a>
    </div>
  )
}

export default Home;