import { repertorios } from '../models/reportorio.models.js';

const allCanciones = async (req, res) => {
    try{
        const repertorio = await repertorios.findAll()
        return res.json(repertorio)
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}


const createCancion = async (req, res) => {
    try {
        const {titulo, artista, tono } = req.body 
        const repertorio = await repertorios.create( { titulo, artista, tono})
        return res.json(repertorio)

    }catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


const deleteCancion = async (req, res) => {
    try{
    const {id} = req.params
    const repertorio = await repertorios.remove(id)
    return res.json(repertorio)

    }catch(error){
    console.log(error)
    return res.status(500).json(error)
    }
}

const updateCancion = async (req, res) => {
    try{
        const { titulo, artista, tono } = req.body
        const {id} = req.params
        const repertorio = await repertorios.update({id, titulo, artista, tono})
        return res.json(repertorio)

    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

export const cancionesController = {
    allCanciones,
    createCancion, 
    deleteCancion,
    updateCancion
}