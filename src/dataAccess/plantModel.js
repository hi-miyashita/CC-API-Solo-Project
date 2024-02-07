const config = require("./knexfile");
const knex = require("knex")(config);
const PLANT_TABLE = "planttable";

module.exports = {
  PLANT_TABLE,

  getAll(limit = 100) {
    return knex.select().from("planttable").limit(limit);
  },

  getById(id) {
    return knex
      .select({
        id: "id",
        name: "name",
        family: "family",
        genus: "genus",
        area: "area",
        location: "location",
        date: "date",
        note: "note",
      })
      .from(PLANT_TABLE)
      .where({ id })
      .first();
  },

  create(plant) {
    return knex(PLANT_TABLE).insert(plant).returning("id");
  },

  update(id, plant) {
    return knex(PLANT_TABLE)
      .where({ id })
      .update(plant)
      .then(() => id);
  },

  delete(id) {
    return knex(PLANT_TABLE).where({ id }).del();
  },
};
