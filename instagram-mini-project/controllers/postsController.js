const db = require('../db')

class postsController{
    constructor (){
        this.data = [];
    }

    async all(request, response){
        try{
            const data = await db.any('SELECT * FROM posts');
            console.log(data);
            return response.json({
                posts_data: data,
            });
        }catch(err){
          response.status(404).send(err);
        }
    }



    async posts_id(request, response){
        try{
            const getId = parseInt(request.params.id);
    
            const data = await db.one('SELECT * FROM posts WHERE id=$1', getId);
            console.log(data);
            return response.json({
                posts_id_data: data,
            });
        }catch(err){
          response.status(404).send(err);
        }
    }



    async posts_users_id(request, response){
        try{
            const getUserId = parseInt(request.params.id);
    
            const data = await db.one('SELECT * FROM posts WHERE users_id=$1', getUserId);
            console.log(data);
            return response.json({
                posts_id_data: data,
            });
        }catch(err){
          response.status(404).send(err);
        }
    }




    async add_posts(request, response){
        try{
            await await db.none('INSERT INTO posts (users_id, photo_cap, url) VALUES (${users_id}, ${photo_cap}, ${url})', request.body);
    
            return response.send( 
                `The following post has been created: ${request.body.url}` 
            );
        }catch(err){
            console.log(err, "didnt work");
            response.status(404).send(err);
        }
    }


    async delete_posts(request,response){
        try{
            const deletePost = parseInt(request.params.id);
            await db.none('DELETE FROM posts WHERE id=$1', deletePost);
    
            return response.send(
                `The following post id has been deleted: ${deletePost}`
            )
    
        }catch(err){
            console.log(err, "didnt work");
            response.status(404).send(err);
        }
    }


    async update_posts(request, response){
        try{
            const updatePost = parseInt(request.params.id);
            await db.any(`UPDATE posts SET photo_cap=$<photo_cap> WHERE id=${updatePost}`, request.body);
            
            return response.send(
                `The following post id has been updated: ${updatePost}`
            )
         }catch(err){
            console.log(err, "didnt work");
            response.status(404).send(err);
         }
    }
}

module.exports = postsController;