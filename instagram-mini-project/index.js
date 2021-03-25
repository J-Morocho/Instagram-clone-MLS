const express = require("express");
const pg = require('pg-promise');
const db = require('./db');
const app=express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/api/users/', async function(response, request){
    try{
        const names = await db.any('SELECT name FROM users');
        console.log(names);
        return response.json({
            name: names,
        });
    }catch(err){
       console.log(response);
    response.status(500).send(err);
    }
});


app.listen(PORT, ()=>{
    console.log(`Server started on Port ${PORT}`)
})