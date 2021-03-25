
exports.up = function(knex) {
  return knex.schema.createTable('posts', function(table){
    table.increments('id');
    table.integer('users_id')
    table.text('photo_cap');
    table.timestamps();
    table.string('url');

    table.foreign('users_id').references('users.id');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
