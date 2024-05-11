import {Router } from 'express';
import { cancionesController } from '../controller/canciones.controller.js';

const router = Router ();


//path
router.get('/', cancionesController.allCanciones );
router.post('/', cancionesController.createCancion);
router.delete('/:id', cancionesController.deleteCancion);
router.put('/:id', cancionesController.updateCancion);



export default router; 