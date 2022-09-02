import React from 'react'
import Slider from '../Slider/Slider';






const Promociones = () => {


  const Promociones = [
    {
      imagen: process.env.PUBLIC_URL + 'Imagenes/papas.png',
      nombre: 'CAPUCCHINO'
    },
    {
      imagen: process.env.PUBLIC_URL +'Imagenes/papas.png' ,
      nombre: 'FAMILIAR'
    },
    {
      imagen:  process.env.PUBLIC_URL +'Imagenes/papas.png',
      nombre: 'PARA COMPARTIR'
    }
   
  ];


  return (
    <div className='slider-img'>

    <Slider imagenes={Promociones}></Slider>

    </div>
  )
}

export default Promociones