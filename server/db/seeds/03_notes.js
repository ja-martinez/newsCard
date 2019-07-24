
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {listing_id: 1, content: 'OMG this is so scary'},
        {listing_id: 2, content: 'OMG this is so scary'},
        {listing_id: 3, content: 'OMG this is so scary'}
      ]);
    });
};
