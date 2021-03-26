import data from 'users.js'

exports.seed = function(knex, Promise) {
    return knex('users').del()
    .then(function () {
        return knex('users').insert(data)
    })
}