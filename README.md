# Sistema de Compras de Artículos

Esta aplicación web permite la gestión de pedidos de artículos. A través de una interfaz sencilla, el usuario puede seleccionar productos, elegir un vendedor y generar pedidos. Los artículos se obtienen del backend y los vendedores de una API externa.

## Tecnologías utilizadas

- **Frontend**: React (JavaScript)
- **Backend**: .NET Core (C#)

Ejecución del Backend
Navega a la carpeta backend:


cd backend
Restaura las dependencias de .NET:

dotnet restore
Ejecuta la aplicación:

dotnet run
El backend debería estar corriendo en http://localhost:5000 (o el puerto configurado en tu proyecto).

Ejecución del Frontend
Navega a la carpeta frontend:


cd ../frontend
Instala las dependencias de Node.js:

npm install
Ejecuta el frontend en modo desarrollo:


npm start
Abre tu navegador y visita http://localhost:3000 para ver la aplicación.

# Funcionalidades Implementadas
Frontend
Listado de Artículos: Muestra una lista de artículos recuperada desde el backend.
Desplegable de Vendedores: Muestra un listado de vendedores recuperado de una API externa.
Generación de Pedido: Permite seleccionar artículos y un vendedor para crear un pedido.
Backend
Endpoint para Listar Artículos: Devuelve el listado de artículos disponibles.
Validación y Recepción de Pedidos: Procesa el pedido y valida que los datos sean correctos.
Buenas Prácticas y Mejoras Opcionales
Validaciones adicionales en el frontend y backend para mejorar la integridad de los datos.
Componentización en React para facilitar la reutilización de componentes.
Control de Errores en el frontend para manejar errores de API.
Estilos y Diseño: Aplicar un framework de diseño (como Bootstrap o Material UI).
Documentación de API: Incluir documentación de los endpoints en el backend (ej., con Swagger).
Pruebas Unitarias: Agregar pruebas en el frontend y backend para garantizar la funcionalidad.
