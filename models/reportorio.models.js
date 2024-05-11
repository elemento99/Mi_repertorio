import { pool } from '../database/connection.js'

const findAll = async () => {
    const { rows } = await pool.query('SELECT * from canciones')
    return rows 
}


const create = async ({ titulo, artista, tono}) => {
    const query = {
        text: `INSERT INTO canciones (titulo, artista, tono)
        VALUES ($1, $2, $3) RETURNING *`,
        values: [ titulo, artista, tono]
    }

    const {rows} = await pool.query(query)
    return rows[0]
}


const remove = async(id) => {
    const query = {
        text: `DELETE from canciones
        WHERE id = $1 RETURNING *`,
        values: [id]
    }
    const { rows } = await pool.query(query)
    return rows 
}

const update = async ({ id, titulo, artista, tono}) => {
    const query = {
        text: `UPDATE canciones 
        SET titulo = $2,
        artista = $3, 
        tono = $4
        where id = $1 RETURNING *`,
        values: [ id, titulo, artista, tono]
    }
    const rows = await pool.query(query)
    return rows [0]
}


export const repertorios = {
    findAll, 
    create,
    remove,
    update

}