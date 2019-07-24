
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', table => {
    table.increments();
    table.integer('listing_id')
      .notNullable()
      .references('id')
      .inTable('saved_listings')
      .onDelete('CASCADE')
      .index();
    table.string('content');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes')
};
