
exports.up = function(knex) {
  return knex.schema.createTable('comments', function(table){
    table.increments('id');
    table.integer('users_id')
    table.integer('posts_id')
    table.text('comment_text');
    table.timestamps();

    table.foreign('users_id').references('users.id');
    table.foreign('posts_id').references('posts.id');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
