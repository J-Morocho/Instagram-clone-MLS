const knexfile = require("./knexfile")
const pg = require('pg-promise')()

const db = pg({
    'host': 'localhost',
    'port': 5432,
    'database': 'api',
    'user': 'jendri',
    'password': "zornlemma"
})

module.exports = db;
