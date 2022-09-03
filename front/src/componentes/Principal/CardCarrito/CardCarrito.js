import React from 'react'
import module from'../CardCarrito/CardCarrito.module.css'

const CardCarrito = ({producto,cantidad,foto,precio}) => {
  const uri_imagenes = '../../Imagenes/'
  
  return (
    <>
        <div className={module.container}>
                <p > {producto}</p>
                <p >Unidades : {cantidad}</p>
                <p >total : {precio}</p>
              
                <img src={uri_imagenes+foto} alt='fotito' className='img-producto'/>
        </div>
    </>
  )
}

export default CardCarrito