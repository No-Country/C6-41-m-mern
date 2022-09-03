import React,{ useContext } from "react";
import context from "./Context";

const useCarrito = () => {
  const { carritoItems, setCarritoItems } = useContext(context);

  /**
   * Agregar producto (agregar el objeto)
   * @param {object} objeto
   */
  const addItem = (newItem, unidades,foto,precio) => {
    setCarritoItems((prev) => [...prev, { ...newItem, unidades: unidades, foto: foto , precio: precio}]);
  };

  /**
   * Eliminar item por ID
   * @param {string} id
   */
  const removeItem = (id = "") => {
    setCarritoItems((prev) => prev.filter((item) => item._id !== id));
  };

  /**
   * Traer los items del carrito
   */

  const getCarritoItems = () => carritoItems || [];

  const cambiarCantidadItem = (id, cantidad) => {
    setCarritoItems((prev) =>
      prev.map((item) => {
        if (item._id === id) item.unidades = cantidad;
        return item;
      })
    );
  };

  return {
    addItem,
    removeItem,
    getCarritoItems,
    cambiarCantidadItem,
  };
};

export default useCarrito;