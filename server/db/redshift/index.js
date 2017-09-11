const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.RSUSER,
    host: process.env.RSHOST,
    database: process.env.RSDATABASE,
    password: process.env.RSPASSWORD,
    port: process.env.RSPORT,
    ssl: true
})

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
}