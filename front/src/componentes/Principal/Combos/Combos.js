import Card from "../Card/Card";
import React, { useState, useEffect } from "react";
import '../../Home/Home.css'

import useCarrito from "../../../context/useCarrito";
import { Link } from "react-router-dom";

function Combos() {
  const [products, setProducts] = useState(null);
  const { getCarritoItems } = useCarrito();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/productos`)
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {loading == true ? (<></>) : (
        <>
      <div>
        {products.map((product) => {
          return !getCarritoItems().some((item) => item._id === product._id) ? (
            <Card precio={product.precio} title={product.nombre} img={product.ruta}  />
          ) : null;
        })}
      </div>
      <div>
        {getCarritoItems()?.length > 0 ? (
          <Link to={"/Finalizar"} key={"Ver Carrito"}>
            <button className="btn">Ver Carrito</button>
          </Link>
        ) : null}
      </div>
      </>
      )}
    </div>
  );
}

export default Combos;
