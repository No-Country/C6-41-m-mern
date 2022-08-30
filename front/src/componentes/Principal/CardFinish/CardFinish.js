import React from 'react'
import ButtonCard from '../ButtonCard/ButtonCard'



export const CardFinish =({ texto}) => {

  const onAdd = (quantity) => {
    console.log("compraste $ {quantity} unidades");
  }

  return (
    <>
      <ButtonCard initial={1} stock={5} onAdd={onAdd}></ButtonCard>
    </>
  );
}
export default CardFinish