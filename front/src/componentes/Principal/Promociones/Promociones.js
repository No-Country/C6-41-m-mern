import React from 'react'
import Slider from '../Slider/Slider';
import amigos from '../../Imagenes/promoamigos.png'
import familiar from '../../Imagenes/promofamiliar.png'
import promox2 from '../../Imagenes/promox2.png'





const Promociones = () => {


  const Promociones = [
    {
      imagen: amigos,
      nombre: 'PROMO DEL DÍA'
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