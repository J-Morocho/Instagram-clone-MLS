const express = require("express");
const pg = require('pg-promise');
const db = require('./db');
const app=express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/api/users', async function(request, response){
    try{
        const data = await db.any('SELECT * FROM users');
        console.log(data);
        return response.json({
            users_data: data,
        });
    }catch(err){
      response.status(500).send(err);
    }
});


app.listen(PORT, ()=>{
    console.log(`Server started on Port ${PORT}`)
})