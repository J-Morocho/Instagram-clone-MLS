
exports.up = function(knex) {
  return knex.schema.createTable('comments', function(table){
    table.increments('id');
    table.integer('users_id')
    table.integer('posts_id')
    table.text('comment_text');
    table.timestamps(true, true);

    table.foreign('users_id').onDelete('CASCADE').references('users.id');
    table.foreign('posts_id').onDelete('CASCADE').references('posts.id');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
