import React from 'react'
import "../Card/Card.css"



function Card({img, title}) {

  return (
    <div className='card-container'>
      <div className='image-container'>
        <h3 className='card-title'>{title}</h3>
        <img src={img} alt='' className='img-producto'/>
      </div>
    </div>
  )
}

export default Card