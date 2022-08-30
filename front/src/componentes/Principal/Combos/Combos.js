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
      title='POLLO'
      img={combopollo}
      nombre=''
      precio={20}
      />
      <Card
      title='TRIPLE EN COMBO'
      img={combotriple}
      nombre=''
      precio={20}
      />
      <Card
      title=''
      img={veggie}
      nombre=''
      precio={20}
      />
      <Card
      title='VEGGIE'
      img={combodoble}
      nombre=''
      precio={20}
      />
      <Card
      title='DOBLE ESPECIAL'
      img={especial1}
      nombre=''
      precio={20}
      />
      <Card
      title='ESPECIAL DE LA CASA'
      img={especial2}
      nombre=''
      precio={20}
      />
      <Card
      title='ENSALADA TRES GUSTOS'
      img={ensalada}
      nombre=''
      precio={20}
      />
      <Card
      title='ESPECIAL TRIPLE'
      img={especial3}
      nombre=''
      precio={20}
      />
    </div>
  )
}

export default Combos