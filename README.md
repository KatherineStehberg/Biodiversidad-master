# Biodiversidad Master

¡Bienvenido al proyecto **Biodiversidad Master**! Este repositorio contiene el código fuente de un marketplace enfocado en productos y servicios relacionados con la biodiversidad. El objetivo principal del proyecto es promover la sostenibilidad mediante una plataforma que conecta a usuarios interesados en productos ecológicos y servicios amigables con el medio ambiente.

## Características principales

- **Autenticación de usuarios**: Registro e inicio de sesión seguro.
- **Marketplace**: Permite a los usuarios publicar y explorar productos y servicios.
- **Panel de usuario**: Espacio personalizado para gestionar publicaciones y datos de usuario.
- **Páginas informativas**: Incluye secciones como "Quiénes Somos", "Productos", "Servicios" y "Contacto".
- **Diseño responsivo**: Compatible con dispositivos móviles y escritorio.

## Tecnologías utilizadas

### Frontend
- **React**: Biblioteca para construir la interfaz de usuario.
- **Vite**: Herramienta de desarrollo rápida y ligera.
- **Axios**: Para manejar solicitudes HTTP.
- **CSS3**: Para el diseño y estilo de la aplicación.

### Backend
- **Node.js**: Entorno de ejecución para el servidor.
- **Express**: Framework web para manejar rutas y middleware.
- **PostgreSQL**: Base de datos relacional para almacenar datos.
- **jsonwebtoken**: Para la autenticación basada en tokens.

## Estructura del proyecto

```
Biodiversidad-master/
├── frontend/
│   ├── src/
│   │   ├── components/  # Componentes de React
│   │   ├── pages/       # Páginas principales
│   │   ├── App.jsx      # Componente principal
│   │   └── styles.css   # Estilos generales
├── backend/
│   ├── server.js        # Archivo principal del servidor
│   ├── routes/          # Rutas de la API
│   ├── controllers/     # Controladores
│   ├── models/          # Modelos de base de datos
│   └── config/          # Configuración de la base de datos
├── .env                 # Variables de entorno
├── package.json         # Configuración de dependencias
└── README.md            # Documentación del proyecto
```

## Instalación y configuración

### Requisitos previos

1. Node.js (v18 o superior).
2. PostgreSQL.
3. Git.

### Pasos para la instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/KatherineStehberg/Biodiversidad-master.git
   cd Biodiversidad-master
   ```

2. Configura las variables de entorno en un archivo `.env`:

   ```
   PORT=3000
   PGHOST=localhost
   PGUSER=tu_usuario
   PGPASSWORD=tu_contraseña
   PGDATABASE=biodiversidad
   PGPORT=5432
   JWT_SECRET=clave_secreta
   ```

3. Instala las dependencias del frontend y backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Inicia la base de datos:

   ```sql
   CREATE DATABASE biodiversidad;
   ```

5. Ejecuta el servidor y el cliente:

   **Backend:**
   ```bash
   npm start
   ```

   **Frontend:**
   ```bash
   cd ../frontend
   npm run dev
   ```

6. Accede a la aplicación en tu navegador:

   ```
   http://localhost:5173
   ```

## Contribuciones

Si deseas contribuir, por favor crea un *fork* del repositorio, realiza tus cambios en una rama nueva y envía un *pull request*. ¡Las sugerencias y mejoras siempre son bienvenidas!

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por apoyar la biodiversidad y ser parte de este proyecto sostenible! 🌱

