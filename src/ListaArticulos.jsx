import React, { useEffect, useState } from "react";

const ListaArticulos = ({ onArticuloSeleccionado }) => {
  const [articulos, setArticulos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("/articulos.json") 
      .then((response) => response.json())
      .then((data) => {
        const articulosValidos = data.articulos.filter((articulo) => {
          const descripcionValida = /^[a-zA-Z0-9\s]+$/.test(articulo.descripcion);
          return (
            articulo.deposito === 1 && 
            articulo.precio > 0 &&      
            descripcionValida            
          );
        });
        setArticulos(articulosValidos); 
      })
      .catch((error) => console.error("Error al cargar los artículos:", error));
  }, []);

  const manejarSeleccionArticulo = (articuloCodigo, precio) => {
    if (carrito.includes(articuloCodigo)) {

      setCarrito(carrito.filter((codigo) => codigo !== articuloCodigo));
      setTotal((prevTotal) => prevTotal - precio);
    } else {

      setCarrito([...carrito, articuloCodigo]);
      setTotal((prevTotal) => prevTotal + precio);
    }
    onArticuloSeleccionado(articuloCodigo);
  };

  return (
    <div>
      <h2>Lista de Artículos</h2>
      <ul>
        {articulos.map((articulo) => (
          <li key={articulo.codigo}>
            <label>
              <input
                type="checkbox"
                onChange={() => manejarSeleccionArticulo(articulo.codigo, articulo.precio)}
              />
              {articulo.descripcion} - ${articulo.precio.toFixed(2)}
            </label>
          </li>
        ))}
      </ul>
      <h3>Total del Carrito: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default ListaArticulos;
