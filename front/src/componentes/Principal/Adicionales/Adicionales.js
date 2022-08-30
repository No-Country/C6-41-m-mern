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
      precio= { '$1400' }
      id='100'
      />
      <Card
      nombre='PAPAS'
      img={papas}
      precio={20}
      />
      <Card
      nombre='COMBO POLLO'
      img={pollo}
      precio={20}
      />
      <Card
      nombre='BEBIDAS'
      img={bebida}
      precio={20}
      />
      <Card
      nombre='VEGGIE ESPECIAL'
      img={veggie}
      precio={20}
      />
      <Card
      nombre='NUGGETS'
      img={nuggets}
      precio={20}
      />
    </div>
  )
}

export default Adicionales