const express = require('express');
const cors = require('cors'); // Asegúrate de haber instalado cors con npm install cors
const app = express();
require('dotenv').config();
const routes = require('./src/routes/index');

// Habilita el middleware CORS
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Aquí se agregan las rutas definidas en el archivo de rutas a la aplicación Express
app.use('/', routes);

// Configuración de puerto y puesta en marcha del servidor
// Utiliza el puerto definido en las variables de entorno o un puerto predeterminado
const PORT = process.env.PORT_API || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});