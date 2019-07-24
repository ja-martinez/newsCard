
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('saved_listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('saved_listings').insert([
        {user_id: 1, article_id: 1},
        {user_id: 2, article_id: 2},
        {user_id: 3, article_id: 3}
      ]);
    });
};
