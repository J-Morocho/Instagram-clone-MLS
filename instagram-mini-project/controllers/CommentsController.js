const db = require('../db')

class CommentsController {

	constructor() {
		this.data = []
	}

	async all(request, response) {
		
		try {
			const data = await db.any('SELECT * FROM comments')
			console.log(data)
			return response.json({
				data: data
			})
		} catch(err) {
			console.log(err)
			response.status(500).json({
				error: "Could not fetch all comments"
			})
		}
	
	}

	async post_comments(request, response) {

		try {
			const posts_id = request.params.id
			const data = await db.any('SELECT * FROM comments WHERE posts_id=$1', posts_id)
			return response.json({
				data: data
			})
		} catch (err) {
			response.status(500).json({
				error: err
			})
		}
	}

	async add_comment(request, response) {

		try{
			const body = request.body
			console.log(body)
			// INSERT INTO comments (users_id, posts_id, comment_text) VALUES (VAL1, VAL2, VAL3)
			const data = db.none('INSERT INTO comments (users_id, posts_id, comment_text) VALUES (${users_id}, ${posts_id}, ${comment_text})', request.body)

			return response.json({
				data: data
			})
		} catch(err) {
			response.status(500).json({
				error: err
			})
		}
	}

	async delete_post_comment(request, response) {
		// TODO: make sure data is being deleted
		try {
			const post_id = request.params.id
			const comment_id = request.params.comment_id
			// comment_id may not be best here
			const data = await db.none('DELETE FROM comments where posts_id=$1 AND id=$2', [post_id, comment_id])
			console.log(data)
			return response.json({
				data: 'removed comment'
			})
		} catch (err) {
			console.log(err)
			response.status(500).json({
				error: err
			})
		}
	}

	async edit_comment(request, response) {

		// TODO: build out the logic
		// TO BE IMPLEMENTED
		try {
			const post_id = request.params.id
			const comment_id = request.params.comment_id
		} catch (err) {
			response.status(500).json({
				error: err
			})
		}

	}

}


module.exports = CommentsController