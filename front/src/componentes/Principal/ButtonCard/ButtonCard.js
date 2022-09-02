import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./ButtonCard.css"



export const ButtonCard =({ initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1);
    }
    const increase = () => {
        setCount(count + 1);
    }
    return (
        <div className='counter'>
            <button className='btn-card' disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button className='btn-card' disabled={count >= stock} onClick={increase}>+</button>
            <Link to="../Finalizar">
            <button className='btn-card' disabled={stock <= 0} inClick={() => onAdd(count)}>Agregar</button>
            </Link>
            
        </div>
    )
}
   
      

export default ButtonCard