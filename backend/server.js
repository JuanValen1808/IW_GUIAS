const express = require('express')
const servicios = require('./data/servicios')

const app = express()
const PORT = 3000

// Middleware para interpretar solicitudes en formato JSON
app.use(express.json())

// Ruta principal de bienvenida
app.get('/', (req, res) => {
  res.send('Servidor de ÑubleTech Solutions funcionando correctamente')
})

// Ruta para obtener todos los servicios o filtrados por categoría (Query Params)
app.get('/api/servicios', (req, res) => {
  const categoria = req.query.categoria

  if (categoria) {
    const resultado = servicios.filter(
      servicio => servicio.categoria.toLowerCase() === categoria.toLowerCase()
    )
    return res.json(resultado)
  }

  res.json(servicios)
})

// Ruta para obtener un servicio por ID (URL Params)
app.get('/api/servicios/:id', (req, res) => {
  const id = Number(req.params.id)
  const servicio = servicios.find(item => item.id === id)

  if (!servicio) {
    return res.status(404).json({
      mensaje: 'Servicio no encontrado'
    })
  }

  res.json(servicio)
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`)
})