import React from 'react'
import Card from '../Card/Card' 
import doble from '../../Imagenes/doble.png'
import papas from '../../Imagenes/papas.png'
import pollo from '../../Imagenes/pollo.png'
import bebida from '../../Imagenes/gaseosa.png'
import veggie from '../../Imagenes/veggie.png'
import nuggets from '../../Imagenes/nuggets.png'




function Adicionales () {


  return (
    <div>
      <Card
      title='DOBLE ESPECIAL'
      img={doble}
      />
      <Card
      title='PAPAS'
      img={papas}
      />
      <Card
      title='POLLO CRUJIENTE'
      img={pollo}
      />
      <Card
      title='BEBIDAS'
      img={bebida}
      />
      <Card
      title='VEGGIE ESPECIAL'
      img={veggie}
      />
      <Card
      title='NUGGETS'
      img={nuggets}
      />
    </div>
  )
}

export default Adicionales