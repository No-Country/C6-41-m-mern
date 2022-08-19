import React from 'react'
import "../Card/Card.css"



function Card({img}) {

  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={img} alt='' />
      </div>
    </div>
  )
}

export default Card