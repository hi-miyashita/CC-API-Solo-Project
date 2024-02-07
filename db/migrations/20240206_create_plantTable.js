exports.up = function (knex) {
  return knex.schema.createTable("plantTable", function (table) {
    table.increments("id").primary();
    table.string("name", 100).notNullable();
    table.string("family", 100).notNullable();
    table.string("genus", 100).notNullable();
    table.string("area", 100).notNullable();
    table.string("location", 100).notNullable();
    table.date("date").notNullable();
    table.text("note");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("plantTable");
};
