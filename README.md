# PhoenixTech2

Este proyecto es una mejora para el Ecommerce de PhoenixTech, usando nuevas tecnologías

#🔧 Tecnologías y Arquitectura Propuesta
Frontend (React)
React Router para navegación entre páginas.

Redux Toolkit o Context API para manejar el estado global (especialmente útil para el carrito y sesión).

Tailwind CSS o Material UI en lugar de Bootstrap para un diseño más moderno y responsivo.

Axios para consumir APIs.

React Hook Form + Yup para formularios y validaciones.

Backend (Node.js con Express)
Express.js como framework web.

MongoDB con Mongoose para base de datos (ideal para estructuras flexibles de productos).

JWT + Bcrypt para autenticación y seguridad.

Cloudinary o Firebase Storage para almacenar imágenes de productos.

Cors, Helmet, Rate Limit para mejorar seguridad.

Extras recomendados
Stripe o MercadoPago para pasarela de pagos.

Docker para facilitar despliegue.

Render o Railway para hosting gratuito del backend.

Vercel o Netlify para desplegar el frontend.

#🧩 Módulos/Funcionalidades Clave
1. Usuarios
Registro e inicio de sesión.

Roles: usuario, administrador.

Recuperación de contraseña.

2. Productos
Listado dinámico.

Filtrado y búsqueda.

Detalle de producto.

3. Carrito de compras
Agregar/eliminar productos.

Vista previa del carrito.

Checkout con validación.

4. Administración
Panel administrativo protegido.

CRUD de productos (crear, editar, eliminar).

Gestión de usuarios (opcional).

Dashboard con métricas básicas (ventas, productos más vistos).

5. Otros apartados
Página principal con banners, promociones, productos destacados.

Página “Quiénes somos”.

Página de contacto o soporte (con formulario de contacto).

Reseñas y puntuaciones de productos (opcional).

#🌟 Ideas para mejorarlo (para futura mejora) 
Dark mode/light mode.

Internacionalización (i18n): soporte para varios idiomas.

Notificaciones en tiempo real (WebSockets) para admins cuando se realice una compra.

Historial de pedidos para el usuario.

Wishlist o favoritos.

SEO-friendly: usa React Helmet.


