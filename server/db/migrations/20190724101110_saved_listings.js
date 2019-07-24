
exports.up = function(knex, Promise) {
  return knex.schema.createTable('saved_listings', table => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('article_id')
      .notNullable()
      .references('id')
      .inTable('articles')
      .onDelete('CASCADE')
      .index();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('saved_listings')
};
