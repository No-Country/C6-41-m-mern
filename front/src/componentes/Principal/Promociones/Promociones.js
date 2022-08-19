import React from 'react'
import Slider from '../Slider/Slider';
import papas from '../../Imagenes/papas.png'




const Promociones = () => {


  const Promociones = [
    {
      imagen: papas,
      nombre: 'PROMO DEL DÍA'
    },
    {
      imagen: papas,
      nombre: 'FAMILIAR'
    },
    {
      imagen: papas,
      nombre: 'COMO SOLO'
    },
    {
      imagen: papas,
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