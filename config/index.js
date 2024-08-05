import { createPool } from "mysql2";
import 'dotenv/config';
config()
let connection = createPool({
    host: process.env.hostDb,
    user: process.env.userDb,
    password: process.env.pwDb,
    database: process.env.dbName,
    multipleStatements: true,
    connectionLimit: 30
})
connection.on('connect', (err) => {
    if(err) throw new Error('Couldn\'t connect to the database, please try again later')
})
export {
    connection
}