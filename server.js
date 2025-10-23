const express = require('express');
const app = express();
const cuentasRoutes = require('./src/routes/cuentasRoutes');

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/cuentas', cuentasRoutes);

//Mensaje de confirmacion
app.get('/', (req, res) => {
  res.send('Servidor de cuentas funcionando correctamente 🟢');
});


// Puerto
const PORT = 3130;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
