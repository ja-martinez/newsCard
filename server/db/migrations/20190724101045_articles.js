
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', table => {
    table.increments();
    table.text('title');
    table.text('description');
    table.text('img_url');
    table.text('link_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('articles')
};
