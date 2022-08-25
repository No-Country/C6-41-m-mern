import React from 'react'
import Card from '../Card/Card'
import veggie from '../../Imagenes/comboveggie.png'
import combopollo from '../../Imagenes/combopollo.png'
import combotriple from '../../Imagenes/combotriple.png'
import combodoble from '../../Imagenes/combodoble.png'
import ensalada from '../../Imagenes/ensalada.png'
import especial1 from '../../Imagenes/doblespe.png'
import especial2 from '../../Imagenes/especial.png'
import especial3 from '../../Imagenes/triplespe.png'




function Combos () {


  return (

    <div> 
      <Card
      title='COMBO DE POLLO'
      img={combopollo}
      />
      <Card
      title='TRIPLE EN COMBO'
      img={combotriple}
      />
      <Card
      title=''
      img={veggie}
      />
      <Card
      title='VEGGIE'
      img={combodoble}
      />
      <Card
      title='DOBLE ESPECIAL'
      img={especial1}
      />
      <Card
      title='ESPECIAL DE LA CASA'
      img={especial2}
      />
      <Card
      title='ENSALADA TRES GUSTOS'
      img={ensalada}
      />
      <Card
      title='ESPECIAL TRIPLE'
      img={especial3}
      />
    </div>
  )
}

export default Combos