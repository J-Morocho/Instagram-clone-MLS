const express = require("express");
const pg = require('pg-promise');
const db = require('./db');
//const userIt = require('./usersClass');
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
      response.status(404).send(err);
    }
});

app.get('/api/users/id', async function(request, response){
    try{
        const data = await db.any('SELECT id FROM users');
        console.log(data);
        return response.json({
            users_id: data,
        });
    }catch(err){
      response.status(404).send(err);
    }
});

app.get('/api/users/name', async function(request, response){
    try{
        const data = await db.any('SELECT name FROM users');
        console.log(data);
        return response.json({
            users_name: data,
        });
    }catch(err){
      response.status(404).send(err);
    }
});

app.get('/api/users/username', async function(request, response){
    try{
        const data = await db.any('SELECT username FROM users');
        console.log(data);
        return response.json({
            users_username: data,
        });
    }catch(err){
      response.status(404).send(err);
    }
});

app.get('/api/users/email', async function(request, response){
    try{
        const data = await db.any('SELECT email FROM users');
        console.log(data);
        return response.json({
            users_email: data,
        });
    }catch(err){
      response.status(404).send(err);
    }
});

app.get('/api/users/id/:id', async function(request, response){
    try{
        const getId = parseInt(request.params.id);

        const data = await db.one('SELECT * FROM users WHERE id=$1', getId);
        console.log(data);
        return response.json({
            users_id_data: data,
        });
    }catch(err){
      response.status(404).send(err);
    }
});

app.get('/api/users/username/:username', async function(request, response){
    try{
        const getUserName = request.params.username;

        const data = await db.one('SELECT * FROM users WHERE username=$1', getUserName);
        console.log(data);
        return response.json({
            users_username_data: data,
        });
    }catch(err){
      response.status(404).send(err);
    }
});

app.get('/api/users/email/:email', async function(request, response){
    try{
        const getEmail = request.params.email;

        const data = await db.one('SELECT * FROM users WHERE email=$1', getEmail);
        console.log(data);
        return response.json({
            users_email_data: data,
        });
    }catch(err){
      response.status(404).send(err);
    }
});

app.get('/api/posts', async function(request, response){
    try{
        const data = await db.any('SELECT * FROM posts');
        console.log(data);
        return response.json({
            posts_data: data,
        });
    }catch(err){
      response.status(404).send(err);
    }
});

app.listen(PORT, ()=>{
    console.log(`Server started on Port ${PORT}`)
})