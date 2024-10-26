# SurisCode
Challenge: Sistema de Compras de Artículos
Esta aplicación web permite la gestión de pedidos de artículos. A través de una interfaz sencilla, el usuario puede seleccionar productos, elegir un vendedor y generar pedidos. Los artículos se obtienen del backend y los vendedores se obtienen de una API externa.

#Tecnologías utilizadas
Frontend: React (JavaScript)
Backend: .NET Core (C#)
Requisitos Previos
Asegúrate de tener instalados los siguientes programas:

Node.js - para ejecutar el frontend
.NET SDK - para ejecutar el backend
Git - (opcional) para clonar el repositorio
Instrucciones de Ejecución
Clonar el Repositorio
Abre tu terminal y ejecuta:
bash
Copiar código
git clone https://github.com/usuario/proyecto-sistema-compras.git
cd proyecto-sistema-compras
Ejecución del Backend
Navega a la carpeta backend:

bash
Copiar código
cd backend
Restaura las dependencias de .NET:

bash
Copiar código
dotnet restore
Ejecuta la aplicación:

bash
Copiar código
dotnet run
El backend debería estar corriendo en http://localhost:5000 (o el puerto configurado en tu proyecto).

Ejecución del Frontend
Navega a la carpeta frontend:

bash
Copiar código
cd ../frontend
Instala las dependencias de Node.js:

bash
Copiar código
npm install
Ejecuta el frontend en modo desarrollo:

bash
Copiar código
npm start
Abre tu navegador y visita http://localhost:3000 para ver la aplicación en funcionamiento.

#Funcionalidades Implementadas
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
Notas Adicionales
Este proyecto es un ejemplo básico y se puede ampliar con características como autenticación, autorización, filtros de productos, y manejo avanzado de estado (ej., Redux o Context API).

