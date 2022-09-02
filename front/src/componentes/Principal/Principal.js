import React from 'react'
import Promociones from '../Principal/Promociones/Promociones'
import Combos from '../Principal/Combos/Combos'




const Principal = () => {
  return (
    <div>
      {/* ok */}
      <div><h2 className='title-pr'>NUESTAS PROMOS DEL DÍA </h2><Promociones></Promociones></div>

        <div><h2 className='title-pr'>NUESTRO MENÚ </h2><Combos></Combos></div>
   
   
    </div>
  )
}

export default Principal