import React from 'react'
import "../Card/Card.css"
import CardFinish from '../CardFinish/CardFinish';




function Card({  title, precio, img}) {
  const uri_imagenes = '../../Imagenes/'
 
  

  return (
    <div className='card-container'>
      <div className='image-container'>
      <h3 className='card-title'>{title}</h3>    
        <img className='img-producto' src={uri_imagenes+img} alt={title}></img>
        <h3 className='card-title'>${precio}</h3>
      </div>
      <CardFinish title={title} precio={precio} foto={img}></CardFinish>
    </div>
    
  )
}

export default Card