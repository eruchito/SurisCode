import React, { useState, useEffect } from "react";

const DropdownVendedores = ({ onVendedorSeleccionado }) => {
  const [vendedores, setVendedores] = useState([]);

  useEffect(() => {
  
    fetch("https://run.mocky.io/v3/c70569d3-9e72-48fb-8e77-3b8b00ceb0bc")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta de la red");
        }
        return response.json();
      })
      .then((data) => setVendedores(data.vendedores))
      .catch((error) => {
        console.error("Error al cargar los vendedores desde la API, cargando desde archivo local:", error);

        fetch("/vendedores.json")
          .then((response) => response.json())
          .then((data) => setVendedores(data.vendedores))
          .catch((error) => console.error("Error al cargar los vendedores desde archivo local:", error));
      });
  }, []);

  return (
    <select onChange={(e) => onVendedorSeleccionado(e.target.value)} defaultValue="">
      <option value="" disabled>
        Selecciona un vendedor
      </option>
      {vendedores.map((vendedor) => (
        <option key={vendedor.id} value={vendedor.id}>
          {vendedor.descripcion}
        </option>
      ))}
    </select>
  );
};

export default DropdownVendedores;


