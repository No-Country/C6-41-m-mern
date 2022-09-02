import React from 'react'
import Slider from '../Slider/Slider';
import capuchino from '../../Imagenes/papas.png'
import familiar from '../../Imagenes/medialunas.png'
import promox2 from '../../Imagenes/nuggets.png'





const Promociones = () => {


  const Promociones = [
    {
      imagen: capuchino,
      nombre: 'CAPUCCHINO'
    },
    {
      imagen: familiar,
      nombre: 'FAMILIAR'
    },
    {
      imagen: promox2,
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