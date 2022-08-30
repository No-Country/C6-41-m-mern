import React from 'react'
import "../Card/Card.css"
import { useNavigate } from "react-router-dom";
import useCarrito from '../../../context/useCarrito';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CardFinish from '../CardFinish/CardFinish';



function Card({ img, title, precio }) {
  const navigate = useNavigate();
  const {addItem} = useCarrito();
  

  return (
    <div className='card-container'>
      <div className='image-container'>
      <h3 className='card-title'>{title}</h3>    
        <img src={img} alt='' className='img-producto'/>
        <h3 className='card-title'>{precio}</h3>
      </div>
      <CardFinish></CardFinish>
    </div>
    
  )
}

export default Card