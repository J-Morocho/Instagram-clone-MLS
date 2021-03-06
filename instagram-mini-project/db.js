const knexfile = require("./knexfile")
const pg = require('pg-promise')()

const db = pg({
    'host': 'localhost',
    'port': 5432,
    'database': 'api',
    'user': process.env.USER,
    'password': process.env.PASSWORD 
})

module.exports = db;
