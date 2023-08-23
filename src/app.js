require('dotenv').config()
const epxress = require('express')
const cors = require('cors')
const app = epxress()
const { dbConnect } = require('./config/mongo')

const PORT = process.env.PORT || 3000
app.use(epxress.json())
app.use(cors({
  origin: 'https://spotify-9f6f4.web.app', // Cambia esta URL por la URL de tu aplicación Angular en producción
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: false // Si estás manejando cookies o sesiones
}));
app.use(epxress.static('./public'));
app.use('/', require('./routes'))

app.listen(PORT, () => {
    console.log(`Tu API es http://localhost:${PORT}/`)
})