import React from 'react'
import Slider from '../Slider/Slider';






const Promociones = () => {


  const Promociones = [
    {
      imagen: process.env.PUBLIC_URL + 'Imagenes/promox1.png',
      nombre: 'CAPUCCHINO'
    },
    {
      imagen: process.env.PUBLIC_URL +'Imagenes/cuarto.png' ,
      nombre: 'FAMILIAR'
    },
    {
      imagen:  process.env.PUBLIC_URL +'Imagenes/simple.png',
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