const db = require('../db');

class usersController{
   constructor (){
       this.data = [];
   }


   async all(request, response){
      try{
         const data = await db.any('SELECT * FROM users');
         console.log(data);
         return response.json({
             users_data: data,
         });
     }catch(err){
       response.status(404).send(err);
     }
   }


   async ids(request, response){
      try{
         const data = await db.any('SELECT id FROM users');
         console.log(data);
         return response.json({
             users_id: data,
         });
     }catch(err){
       response.status(404).send(err);
     }
   }


   async names(request, response){
      try{
         const data = await db.any('SELECT name FROM users');
         console.log(data);
         return response.json({
             users_name: data,
         });
     }catch(err){
       response.status(404).send(err);
     }
   }


   async userNames(request, response){
      try{
         const data = await db.any('SELECT username FROM users');
         console.log(data);
         return response.json({
             users_username: data,
         });
     }catch(err){
       response.status(404).send(err);
     }
   }


   async emails(request, response){
      try{
         const data = await db.any('SELECT email FROM users');
         console.log(data);
         return response.json({
             users_email: data,
         });
     }catch(err){
       response.status(404).send(err);
     }
   }


   async user_id(request, response){
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
   }


   async user_name(request, response){
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
   }


   async user_email(request, response){
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
   }

   
   async add_user(request, response){
      try{
         await db.none('INSERT INTO users (name, username, email, avatar_url) VALUES (${name}, ${username}, ${email}, ${avatar_url})', request.body);
 
         return response.send( 
             `The following user has been added: ${request.body.name}` 
         );
     }catch(err){
         console.log(err, "didnt work");
         response.status(404).send(err);
     }
   }
}

module.exports = usersController;