const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware simple para loguear cada petición
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.url} from ${req.ip}`);
  next();
});

// Ruta principal
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Despliegues - Rosa</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f4f9;
            padding: 2rem;
          }
          h1 { color: #4a148c; }
          .card {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            max-width: 600px;
          }
          .meta {
            margin-top: 1rem;
            font-size: 0.9rem;
            color: #555;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Aplicación de despliegues</h1>
          <p>Hola, soy Rosa y esta es mi aplicación web de ejemplo para la práctica 3.2.</p>
          <p>Está ejecutándose dentro de un contenedor Docker.</p>
          <div class="meta">
            <p><strong>Host:</strong> ${os.hostname()}</p>
            <p><strong>Hora del servidor:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
    </html>
  `);
});

// Ruta de salud para monitorización
app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
