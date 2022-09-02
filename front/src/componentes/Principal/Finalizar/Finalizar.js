import React from 'react'
import { useContext } from "react";
import context from "../../../context/Context";
import useCarrito from "../../../context/useCarrito";
import Combos from '../Combos/Combos';
import CardFinish from '../CardFinish/CardFinish';



const Finalizar = () => {
  const { getCarritoItems } = useCarrito();


  


  console.log(getCarritoItems())
  return (
    <div>
          <CardFinish></CardFinish>
          
    </div>
  )
}

export default Finalizar