import React from 'react'
import Slider from '../Slider/Slider';
import promodeldia from '../../Imagenes/promodeldia.png'
import promofamiliar from '../../Imagenes/promofamiliar.png'
import promox1 from '../../Imagenes/promox1.png'
import promox2 from '../../Imagenes/promox2.png'




const Promociones = () => {


  const Promociones = [
    {
      imagen: promodeldia,
      nombre: 'Promo del Día'
    },
    {
      imagen: promofamiliar,
      nombre: 'Promo familiar'
    },
    {
      imagen: promox1,
      nombre: 'light'
    },
    {
      imagen: promox2,
      nombre: 'light'
    }
   
  ];


  return (
    <div className='slider-img'>

    <Slider imagenes={Promociones}></Slider>

    </div>
  )
}

export default Promociones