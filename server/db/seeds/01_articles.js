
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {title: 'the bombs are near', description: 'the killer clowns from outer space are ready to kill us all in about three clown years (approximately equal to 1.5 days).', img_url: 'https://cdn.shopify.com/s/files/1/0799/0083/products/030206734584_grande.jpg?v=1525719326', link_url: 'google.com'},
        {title: 'the bombs are near', description: 'the killer clowns from outer space are ready to kill us all in about three clown years (approximately equal to 1.5 days).', img_url: 'https://cdn.shopify.com/s/files/1/0799/0083/products/030206734584_grande.jpg?v=1525719326', link_url: 'google.com'},
        {title: 'the bombs are near', description: 'the killer clowns from outer space are ready to kill us all in about three clown years (approximately equal to 1.5 days).', img_url: 'https://cdn.shopify.com/s/files/1/0799/0083/products/030206734584_grande.jpg?v=1525719326', link_url: 'google.com'}
      ]);
    });
};
