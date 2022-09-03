import React from 'react'
import ButtonCard from '../ButtonCard/ButtonCard'
import useCarrito from "../../../context/useCarrito";
import { useNavigate } from 'react-router-dom'



export const CardFinish =({  title, precio, foto}) => {
  const { addItem } = useCarrito();
  const navigate = useNavigate();

  const onAdd = (quantity) => {
    console.log("compraste "+ `${quantity}` + " unidades, total  "+`${quantity*precio}` );
    addItem({title},quantity,{foto},(quantity*precio))
    navigate('../finalizar',{ replace: true })
  }

  return (
    <>
      <ButtonCard initial={1} stock={5} onAdd={onAdd}></ButtonCard>
    </>
  );
}
export default CardFinish