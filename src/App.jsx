import React, { useState } from "react";
import DropdownVendedores from "./DropdownVendedores";
import ListaArticulos from "./ListaArticulos";

const App = () => {
  const [vendedorSeleccionado, setVendedorSeleccionado] = useState(null);
  const [articulosSeleccionados, setArticulosSeleccionados] = useState([]);

  const manejarArticuloSeleccionado = (codigo) => {
    setArticulosSeleccionados((prevSeleccionados) =>
      prevSeleccionados.includes(codigo)
        ? prevSeleccionados.filter((id) => id !== codigo)
        : [...prevSeleccionados, codigo]
    );
  };

  const generarPedido = () => {
    if (!vendedorSeleccionado) {
      alert("Por favor, seleccione un vendedor.");
      return;
    }
    if (articulosSeleccionados.length === 0) {
      alert("Debe seleccionar al menos un artículo para generar el pedido.");
      return;
    }
    alert("Pedido generado exitosamente.");
  };

  return (
    <main>
      <h1>Generador de Pedido</h1>
      
      <div>
        <label>Vendedor:</label>
        <DropdownVendedores onVendedorSeleccionado={setVendedorSeleccionado} />
      </div>

      <div>
        <label>Productos:</label>
        <ListaArticulos onArticuloSeleccionado={manejarArticuloSeleccionado} />
      </div>

      <button onClick={generarPedido} style={{ marginTop: "20px" }}>
        Generar Pedido
      </button>
    </main>
  );
};

export default App;
