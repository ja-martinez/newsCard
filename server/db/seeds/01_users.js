
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Alejandro', email: 'j.alejandro.mrtnz@gmail.com', password: 'password'},
        {name: 'Shirley', email: 'email@gmail.com', password: 'password'},
        {name: 'Seth', email: 'email@yahoo.com', password: 'password'}
      ]);
    });
};
