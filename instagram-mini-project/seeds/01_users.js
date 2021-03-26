const data = require('../data/users')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      console.log(data)
      return knex('users').insert(data);
    });
};
