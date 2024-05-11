
import express from 'express';
import cancionesRoutes from './routes/canciones.route.js'; 

const app = express();

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/canciones', cancionesRoutes)



const PORT = process.env.PORT || 3500
app.listen(PORT, console.log(`Puerto encendido en http://localhost:${PORT}`))