import 'dotenv/config'
import pg from 'pg';
 

const { Pool } = pg

const connectionString = process.env.CONNECTION_STRING


export const pool = new Pool({
    connectionString,
    allowExitOnIdle: true
})

try{
    await pool.query("SELECT NOW()")
    console.log('funcionando ok')
}catch (e){
    console.log(e)
}