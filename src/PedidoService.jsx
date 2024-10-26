const PedidoService = {
    obtenerProductos: async () => {
      const response = await fetch("/api/productos");
      if (!response.ok) throw new Error("Error al obtener productos.");
      return response.json();
    },
  
    obtenerVendedores: async () => {
      const response = await fetch("https://run.mocky.io/v3/c70569d3-9e72-48fb-8e77-3b8b00ceb0bc");
      if (!response.ok) throw new Error("Error al obtener vendedores.");
      return response.json();
    },
  
    guardarPedido: async (pedido) => {
      const response = await fetch("/api/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido),
      });
      return response.json();
    },
  };
  
  export default PedidoService;
  