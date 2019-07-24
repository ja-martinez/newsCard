
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', table => {
    table.increments();
    table.string('title');
    table.string('description');
    table.string('img_url');
    table.string('link_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('savedPosts')
};
