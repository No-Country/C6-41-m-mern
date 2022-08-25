import React from 'react'
import Promociones from '../Principal/Promociones/Promociones'
import Combos from '../Principal/Combos/Combos'
import Adicionales from './Adicionales/Adicionales'

const Principal = () => {
  return (
    <div>
      <div><h2>NUESTAS PROMOS DEL DÍA </h2><Promociones></Promociones></div>
      <div><h2>NUESTRO MENÚ </h2><Combos></Combos></div>
      <div><h2>EXTRAS </h2><Adicionales></Adicionales></div>
    </div>
  )
}

export default Principal