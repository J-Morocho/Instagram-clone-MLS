const express = require("express");
const pg = require('pg-promise');
const db = require('./db');
const app= express();
const CommentsController = require('./controllers/CommentsController')
const comments = new CommentsController()

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/api/users/', async function(request, response){
    try{
        console.log('req',request)
        const names = await db.any('SELECT name FROM users');
        console.log(names);
        return response.json({
            data: names
        })
    } catch(err){
        console.log('err', err)
       response.status(500).send('sorry');
    }
});


app.get('/api/comments', comments.all)

app.get('/api/post/:id/comments', comments.post_comments)

app.delete('/api/post/:id/comment/:comment_id', comments.delete_post_comment)

app.patch('/api/post/:id/comment/:comment_id', comments.edit_comment)


app.listen(PORT, ()=>{
    console.log(`Server started on Port ${PORT}`)
})