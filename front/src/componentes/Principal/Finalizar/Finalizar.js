import React from "react";
import { useContext, useEffect, useState } from "react";
import context from "../../../context/Context";
import useCarrito from "../../../context/useCarrito";
import CardCarrito from "../CardCarrito/CardCarrito";
import finalizar from "../Finalizar/Finalizar.module.css";

const Finalizar = () => {
  const { getCarritoItems } = useCarrito();

  const precioTotal = getCarritoItems().reduce(
    (total, currentValue) => (total = total + currentValue.precio),
    0
  );

  return (
    <>
      <h1>El total de tu compra es ${precioTotal}</h1>

      <div className={finalizar.container}>
        {getCarritoItems().map((product) => (
          <CardCarrito
            producto={product.title}
            cantidad={product.unidades}
            foto={product.foto.foto}
            precio={product.precio}
          ></CardCarrito>
        ))}
      </div>
    </>
  );
};

export default Finalizar;
