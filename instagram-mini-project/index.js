require('dotenv').config()
const express = require("express");
const pg = require('pg-promise');
const db = require('./db');

const userController = require('./controllers/usersController');
const postsController = require('./controllers/postsController');
const CommentsController = require('./controllers/CommentsController');

const users = new userController();
const posts = new postsController();
const comments = new CommentsController();


const app=express();

app.use(express.json());

const PORT = process.env.PORT || 3000;


//Users get methods
app.get('/api/users', users.all);


app.get('/api/users/id', users.ids);
    

app.get('/api/users/name', users.names);


app.get('/api/users/username', users.userNames);


app.get('/api/users/email', users.emails);


app.get('/api/users/id/:id', users.user_id);


app.get('/api/users/username/:username', users.user_name);


app.get('/api/users/email/:email', users.user_email);


//Users post method - add a user, using JSON input
//{
//    "name":"bob",
//    "username":"bigTime",
//    "email":"bob@example.com",
//    "avatar_url":"https://imgir.com/bobbybigs/sompic4"
//}
app.post('/api/users/', users.add_user);


//Posts get methods
app.get('/api/posts', posts.all);


app.get('/api/posts/id/:id', posts.posts_id);


app.get('/api/posts/users_id/:id', posts.posts_user_id);


app.get('/api/posts/url/:url', posts.posts_url);


//Posts post method
//{
//   "users_id":"1",
//    "photo_cap":"ex",
//    "url":"ex.png"
//}
app.post('/api/posts/add_posts', posts.add_posts);


//Posts delete method
app.delete('/api/posts/delete_posts/:id', posts.delete_posts);


//Posts put/patch method
app.put('/api/posts/:id', posts.update_posts);
app.patch('/api/posts/:id', posts.update_posts);


//Comments get method
app.get('/api/comments', comments.all)


app.get('/api/post/:id/comments', comments.post_comments)


//Comments delete method
app.delete('/api/post/:id/comment/:comment_id', comments.delete_post_comment)


//Comments put/patch method
app.put('/api/post/:id/comment/:comment_id', comments.edit_comment)
app.patch('/api/post/:id/comment/:comment_id', comments.edit_comment)


app.listen(PORT, ()=>{
    console.log(`Server started on Port ${PORT}`)
})