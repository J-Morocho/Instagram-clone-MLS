
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments("id");
    table.string('name', 20).notNullable();
    table.string('username', 20).unique().notNullable();
    table.string('email').unique().notNullable();
    table.string('avatar_url');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
